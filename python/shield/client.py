import hashlib
import hmac as hmac_mod
import json
import time
from typing import Any, Dict, Optional
from urllib.parse import urlparse

import requests

from .exceptions import ShieldError
from .resources.sessions import Sessions
from .resources.events import Events
from .resources.verify import Verify


class Client:
    """Official Shield Python SDK client.

    Args:
        api_key: Your Shield API key.
        base_url: Base URL for the Shield API. Defaults to https://getshield.dev/api/v1.
        hmac_secret: Optional HMAC secret for request signing.
        timeout: Request timeout in seconds. Defaults to 30.
    """

    def __init__(
        self,
        api_key: str,
        base_url: str = "https://getshield.dev/api/v1",
        hmac_secret: Optional[str] = None,
        timeout: int = 30,
    ):
        self.api_key = api_key
        self.base_url = base_url.rstrip("/")
        self.hmac_secret = hmac_secret
        self.timeout = timeout
        self._session = requests.Session()

        # Resource instances
        self.sessions = Sessions(self)
        self.events = Events(self)
        self.verify = Verify(self)

    def _request(
        self,
        method: str,
        path: str,
        json_data: Optional[Dict[str, Any]] = None,
        params: Optional[Dict[str, Any]] = None,
        raw_response: bool = False,
    ) -> Any:
        """Make an authenticated request to the Shield API.

        Args:
            method: HTTP method (GET, POST, PUT, DELETE).
            path: API path (e.g. /sessions).
            json_data: JSON body for POST/PUT requests.
            params: Query parameters.
            raw_response: If True, return raw response content (bytes).

        Returns:
            Parsed JSON response as dict, or bytes if raw_response is True.

        Raises:
            ShieldError: On non-2xx responses or request failures.
        """
        url = f"{self.base_url}{path}"
        method = method.upper()

        headers = {
            "X-Shield-Key": self.api_key,
            "Content-Type": "application/json",
        }

        # Serialize body
        body = b""
        if json_data is not None:
            body = json.dumps(json_data, separators=(",", ":")).encode("utf-8")

        # HMAC signing
        if self.hmac_secret:
            timestamp = str(int(time.time()))
            body_hash = hashlib.sha256(body).hexdigest()
            message = f"{timestamp}.{method}.{path}.{body_hash}"
            signature = hmac_mod.new(
                self.hmac_secret.encode("utf-8"),
                message.encode("utf-8"),
                hashlib.sha256,
            ).hexdigest()
            headers["X-Shield-Signature"] = signature
            headers["X-Shield-Timestamp"] = timestamp

        try:
            response = self._session.request(
                method=method,
                url=url,
                headers=headers,
                data=body if body else None,
                params=params,
                timeout=self.timeout,
            )
        except requests.RequestException as e:
            raise ShieldError(
                message=f"Request failed: {str(e)}",
                status_code=0,
                code="request_error",
            )

        if not (200 <= response.status_code < 300):
            error_message = response.text
            error_code = "api_error"
            try:
                error_body = response.json()
                error_message = error_body.get("error", error_message)
                error_code = error_body.get("code", error_code)
            except (ValueError, KeyError):
                pass
            raise ShieldError(
                message=error_message,
                status_code=response.status_code,
                code=error_code,
            )

        if raw_response:
            return response.content

        if not response.content:
            return {}

        return response.json()
