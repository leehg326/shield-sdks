package dev.getshield.exception;

/**
 * Exception thrown when the Shield API returns a non-2xx response.
 */
public class ShieldException extends RuntimeException {

    private final int statusCode;
    private final String code;

    public ShieldException(int statusCode, String code, String message) {
        super(message);
        this.statusCode = statusCode;
        this.code = code;
    }

    public int getStatusCode() {
        return statusCode;
    }

    public String getCode() {
        return code;
    }

    @Override
    public String toString() {
        return String.format("ShieldException{status=%d, code='%s', message='%s'}", statusCode, code, getMessage());
    }
}
