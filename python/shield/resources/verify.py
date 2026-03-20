from typing import Any, Dict


class Verify:
    """Verify Shield session integrity."""

    def __init__(self, client):
        self._client = client

    def session(self, session_id: str) -> Dict[str, Any]:
        """Verify the integrity of a session's event chain.

        Args:
            session_id: The session ID to verify.

        Returns:
            Verification result with integrity status.
        """
        return self._client._request("GET", f"/sessions/{session_id}/verify")
