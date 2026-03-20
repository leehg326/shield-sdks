class ShieldError(Exception):
    """Base exception for Shield SDK errors."""

    def __init__(self, message: str, status_code: int = None, code: str = None):
        super().__init__(message)
        self.message = message
        self.status_code = status_code
        self.code = code

    def __str__(self):
        parts = []
        if self.status_code:
            parts.append(f"[{self.status_code}]")
        if self.code:
            parts.append(f"({self.code})")
        parts.append(self.message)
        return " ".join(parts)

    def __repr__(self):
        return (
            f"ShieldError(message={self.message!r}, "
            f"status_code={self.status_code!r}, code={self.code!r})"
        )
