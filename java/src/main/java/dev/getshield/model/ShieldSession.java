package dev.getshield.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public class ShieldSession {

    private String id;
    @JsonProperty("org_id")
    private String orgId;
    private String title;
    private String status;
    @JsonProperty("created_at")
    private String createdAt;
    @JsonProperty("closed_at")
    private String closedAt;
    @JsonProperty("participant_count")
    private int participantCount;
    @JsonProperty("event_count")
    private int eventCount;
    @JsonProperty("tsa_status")
    private String tsaStatus;
    @JsonProperty("tsa_timestamp")
    private String tsaTimestamp;

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getOrgId() { return orgId; }
    public void setOrgId(String orgId) { this.orgId = orgId; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public String getCreatedAt() { return createdAt; }
    public void setCreatedAt(String createdAt) { this.createdAt = createdAt; }

    public String getClosedAt() { return closedAt; }
    public void setClosedAt(String closedAt) { this.closedAt = closedAt; }

    public int getParticipantCount() { return participantCount; }
    public void setParticipantCount(int participantCount) { this.participantCount = participantCount; }

    public int getEventCount() { return eventCount; }
    public void setEventCount(int eventCount) { this.eventCount = eventCount; }

    public String getTsaStatus() { return tsaStatus; }
    public void setTsaStatus(String tsaStatus) { this.tsaStatus = tsaStatus; }

    public String getTsaTimestamp() { return tsaTimestamp; }
    public void setTsaTimestamp(String tsaTimestamp) { this.tsaTimestamp = tsaTimestamp; }

    @Override
    public String toString() {
        return String.format("ShieldSession{id='%s', title='%s', status='%s'}", id, title, status);
    }
}
