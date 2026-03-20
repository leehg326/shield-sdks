package dev.shield.resources;

import com.fasterxml.jackson.databind.JsonNode;
import dev.shield.ShieldClient;

/**
 * Verify resource — verify session hash chain integrity.
 */
public class VerifyResource {

    private final ShieldClient client;

    public VerifyResource(ShieldClient client) {
        this.client = client;
    }

    /**
     * Verify the hash chain integrity of a session.
     *
     * @return JSON with valid, total_events, verified_events, broken_at fields
     */
    public JsonNode session(String sessionId) {
        return client.request("GET", "/sessions/" + sessionId + "/verify", null);
    }
}
