/**
 * Shield Standard Event Taxonomy v1.0 — 37 event types.
 */
export declare enum ShieldEventType {
    PartyJoined = "shield.party.joined",
    PartyLeft = "shield.party.left",
    PartyIdentityVerified = "shield.party.identity.verified",
    PartyIdentityFailed = "shield.party.identity.failed",
    PartyRoleAssigned = "shield.party.role.assigned",
    SessionCreated = "shield.session.created",
    SessionOpened = "shield.session.opened",
    SessionClosed = "shield.session.closed",
    SessionExpired = "shield.session.expired",
    SessionArchived = "shield.session.archived",
    ContentUploaded = "shield.content.uploaded",
    ContentViewed = "shield.content.viewed",
    ContentDownloaded = "shield.content.downloaded",
    ContentDeleted = "shield.content.deleted",
    ContentHashVerified = "shield.content.hash.verified",
    NegotiationTermsProposed = "shield.negotiation.terms.proposed",
    NegotiationTermsAccepted = "shield.negotiation.terms.accepted",
    NegotiationTermsRejected = "shield.negotiation.terms.rejected",
    NegotiationTermsModified = "shield.negotiation.terms.modified",
    NegotiationTermsExpired = "shield.negotiation.terms.expired",
    NegotiationMessageSent = "shield.negotiation.message.sent",
    NegotiationMessageRead = "shield.negotiation.message.read",
    AgreementDrafted = "shield.agreement.drafted",
    AgreementReviewed = "shield.agreement.reviewed",
    AgreementApproved = "shield.agreement.approved",
    AgreementSigned = "shield.agreement.signed",
    AgreementCountersigned = "shield.agreement.countersigned",
    AgreementVoided = "shield.agreement.voided",
    AgreementReached = "shield.agreement.reached",
    AccessGranted = "shield.access.granted",
    AccessRevoked = "shield.access.revoked",
    AccessAttempted = "shield.access.attempted",
    AccessDenied = "shield.access.denied",
    DisclosurePresented = "shield.disclosure.presented",
    DisclosureAcknowledged = "shield.disclosure.acknowledged",
    DisclosureDeclined = "shield.disclosure.declined",
    EvidenceExported = "shield.evidence.exported",
    EvidenceVerified = "shield.evidence.verified",
    EvidenceTamperedDetected = "shield.evidence.tampered_detected"
}
export interface ShieldEvent {
    id: string;
    session_id: string;
    participant_id: string;
    event_type: ShieldEventType | string;
    payload: Record<string, unknown>;
    sequence_num: number;
    prev_hash: string;
    event_hash: string;
    created_at: string;
}
export interface ShieldSession {
    id: string;
    org_id: string;
    title: string;
    status: string;
    created_at: string;
    closed_at: string | null;
    participant_count: number;
    event_count: number;
    tsa_status: string;
    tsa_timestamp: string | null;
}
export interface ShieldVerifyResult {
    valid: boolean;
    total_events: number;
    verified_events: number;
    broken_at: number | null;
    tsa_status: string;
    tsa_timestamp: string | null;
    tsa_token: string | null;
}
export declare class ShieldError extends Error {
    status: number;
    code: string;
    constructor(status: number, code: string, message: string);
}
export interface CreateSessionParams {
    title: string;
}
export interface CreateEventParams {
    session_id: string;
    event_type: ShieldEventType | string;
    actor: string;
    data?: Record<string, unknown>;
}
export type ExportFormat = "json" | "pdf";
export interface ShieldClientOptions {
    baseUrl?: string;
    hmacSecret?: string;
}
