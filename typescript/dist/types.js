"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShieldError = exports.ShieldEventType = void 0;
/**
 * Shield Standard Event Taxonomy v1.0 — 37 event types.
 */
var ShieldEventType;
(function (ShieldEventType) {
    // Party (5)
    ShieldEventType["PartyJoined"] = "shield.party.joined";
    ShieldEventType["PartyLeft"] = "shield.party.left";
    ShieldEventType["PartyIdentityVerified"] = "shield.party.identity.verified";
    ShieldEventType["PartyIdentityFailed"] = "shield.party.identity.failed";
    ShieldEventType["PartyRoleAssigned"] = "shield.party.role.assigned";
    // Session (5)
    ShieldEventType["SessionCreated"] = "shield.session.created";
    ShieldEventType["SessionOpened"] = "shield.session.opened";
    ShieldEventType["SessionClosed"] = "shield.session.closed";
    ShieldEventType["SessionExpired"] = "shield.session.expired";
    ShieldEventType["SessionArchived"] = "shield.session.archived";
    // Content (5)
    ShieldEventType["ContentUploaded"] = "shield.content.uploaded";
    ShieldEventType["ContentViewed"] = "shield.content.viewed";
    ShieldEventType["ContentDownloaded"] = "shield.content.downloaded";
    ShieldEventType["ContentDeleted"] = "shield.content.deleted";
    ShieldEventType["ContentHashVerified"] = "shield.content.hash.verified";
    // Negotiation (7)
    ShieldEventType["NegotiationTermsProposed"] = "shield.negotiation.terms.proposed";
    ShieldEventType["NegotiationTermsAccepted"] = "shield.negotiation.terms.accepted";
    ShieldEventType["NegotiationTermsRejected"] = "shield.negotiation.terms.rejected";
    ShieldEventType["NegotiationTermsModified"] = "shield.negotiation.terms.modified";
    ShieldEventType["NegotiationTermsExpired"] = "shield.negotiation.terms.expired";
    ShieldEventType["NegotiationMessageSent"] = "shield.negotiation.message.sent";
    ShieldEventType["NegotiationMessageRead"] = "shield.negotiation.message.read";
    // Agreement (7)
    ShieldEventType["AgreementDrafted"] = "shield.agreement.drafted";
    ShieldEventType["AgreementReviewed"] = "shield.agreement.reviewed";
    ShieldEventType["AgreementApproved"] = "shield.agreement.approved";
    ShieldEventType["AgreementSigned"] = "shield.agreement.signed";
    ShieldEventType["AgreementCountersigned"] = "shield.agreement.countersigned";
    ShieldEventType["AgreementVoided"] = "shield.agreement.voided";
    ShieldEventType["AgreementReached"] = "shield.agreement.reached";
    // Access (4)
    ShieldEventType["AccessGranted"] = "shield.access.granted";
    ShieldEventType["AccessRevoked"] = "shield.access.revoked";
    ShieldEventType["AccessAttempted"] = "shield.access.attempted";
    ShieldEventType["AccessDenied"] = "shield.access.denied";
    // Disclosure (3)
    ShieldEventType["DisclosurePresented"] = "shield.disclosure.presented";
    ShieldEventType["DisclosureAcknowledged"] = "shield.disclosure.acknowledged";
    ShieldEventType["DisclosureDeclined"] = "shield.disclosure.declined";
    // Evidence (3)
    ShieldEventType["EvidenceExported"] = "shield.evidence.exported";
    ShieldEventType["EvidenceVerified"] = "shield.evidence.verified";
    ShieldEventType["EvidenceTamperedDetected"] = "shield.evidence.tampered_detected";
})(ShieldEventType || (exports.ShieldEventType = ShieldEventType = {}));
class ShieldError extends Error {
    constructor(status, code, message) {
        super(message);
        this.name = "ShieldError";
        this.status = status;
        this.code = code;
    }
}
exports.ShieldError = ShieldError;
