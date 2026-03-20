package dev.shield.resources;

import com.fasterxml.jackson.databind.JsonNode;
import dev.shield.ShieldClient;
import dev.shield.model.ShieldSession;

import java.util.Map;

/**
 * Sessions resource — create, retrieve, and export sessions.
 */
public class SessionsResource {

    private final ShieldClient client;

    public SessionsResource(ShieldClient client) {
        this.client = client;
    }

    /**
     * Create a new session.
     */
    public ShieldSession create(String title) {
        JsonNode response = client.request("POST", "/sessions", Map.of("title", title));
        return client.getObjectMapper().convertValue(response, ShieldSession.class);
    }

    /**
     * Retrieve a session by ID.
     */
    public JsonNode retrieve(String sessionId) {
        return client.request("GET", "/sessions/" + sessionId, null);
    }

    /**
     * Export a session as JSON.
     */
    public JsonNode exportJson(String sessionId) {
        return client.request("GET", "/sessions/" + sessionId + "/export/json", null);
    }

    /**
     * Export a session as PDF bytes.
     */
    public byte[] exportPdf(String sessionId) {
        return client.requestBytes("/sessions/" + sessionId + "/export/pdf");
    }
}
