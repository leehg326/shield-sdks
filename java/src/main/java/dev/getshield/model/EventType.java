package dev.getshield.model;

/**
 * Shield Standard Event Taxonomy v1.0 (37 events).
 */
public enum EventType {

    // Party
    PARTY_JOINED("shield.party.joined"),
    PARTY_LEFT("shield.party.left"),
    PARTY_IDENTITY_VERIFIED("shield.party.identity.verified"),
    PARTY_IDENTITY_FAILED("shield.party.identity.failed"),
    PARTY_ROLE_ASSIGNED("shield.party.role.assigned"),

    // Session
    SESSION_CREATED("shield.session.created"),
    SESSION_OPENED("shield.session.opened"),
    SESSION_CLOSED("shield.session.closed"),
    SESSION_EXPIRED("shield.session.expired"),
    SESSION_ARCHIVED("shield.session.archived"),

    // Content
    CONTENT_UPLOADED("shield.content.uploaded"),
    CONTENT_VIEWED("shield.content.viewed"),
    CONTENT_DOWNLOADED("shield.content.downloaded"),
    CONTENT_DELETED("shield.content.deleted"),
    CONTENT_HASH_VERIFIED("shield.content.hash.verified"),

    // Negotiation
    NEGOTIATION_TERMS_PROPOSED("shield.negotiation.terms.proposed"),
    NEGOTIATION_TERMS_ACCEPTED("shield.negotiation.terms.accepted"),
    NEGOTIATION_TERMS_REJECTED("shield.negotiation.terms.rejected"),
    NEGOTIATION_TERMS_MODIFIED("shield.negotiation.terms.modified"),
    NEGOTIATION_TERMS_EXPIRED("shield.negotiation.terms.expired"),
    NEGOTIATION_MESSAGE_SENT("shield.negotiation.message.sent"),
    NEGOTIATION_MESSAGE_READ("shield.negotiation.message.read"),

    // Agreement
    AGREEMENT_DRAFTED("shield.agreement.drafted"),
    AGREEMENT_REVIEWED("shield.agreement.reviewed"),
    AGREEMENT_APPROVED("shield.agreement.approved"),
    AGREEMENT_SIGNED("shield.agreement.signed"),
    AGREEMENT_COUNTERSIGNED("shield.agreement.countersigned"),
    AGREEMENT_VOIDED("shield.agreement.voided"),
    AGREEMENT_REACHED("shield.agreement.reached"),

    // Access
    ACCESS_GRANTED("shield.access.granted"),
    ACCESS_REVOKED("shield.access.revoked"),
    ACCESS_ATTEMPTED("shield.access.attempted"),
    ACCESS_DENIED("shield.access.denied"),

    // Disclosure
    DISCLOSURE_PRESENTED("shield.disclosure.presented"),
    DISCLOSURE_ACKNOWLEDGED("shield.disclosure.acknowledged"),
    DISCLOSURE_DECLINED("shield.disclosure.declined"),

    // Evidence
    EVIDENCE_EXPORTED("shield.evidence.exported"),
    EVIDENCE_VERIFIED("shield.evidence.verified"),
    EVIDENCE_TAMPERED_DETECTED("shield.evidence.tampered_detected");

    private final String value;

    EventType(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    @Override
    public String toString() {
        return value;
    }
}
