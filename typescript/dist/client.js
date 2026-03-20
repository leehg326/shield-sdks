"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShieldClient = void 0;
const crypto = __importStar(require("crypto"));
const types_1 = require("./types");
const sessions_1 = require("./resources/sessions");
const events_1 = require("./resources/events");
const verify_1 = require("./resources/verify");
class ShieldClient {
    constructor(apiKey, options) {
        this.apiKey = apiKey;
        this.baseUrl = (options?.baseUrl ?? "https://getshield.dev/api/v1").replace(/\/+$/, "");
        this.hmacSecret = options?.hmacSecret;
        const request = this._request.bind(this);
        const rawRequest = this._rawRequest.bind(this);
        this.sessions = new sessions_1.Sessions(request, rawRequest);
        this.events = new events_1.Events(request);
        this.verify = new verify_1.Verify(request);
    }
    async _rawRequest(method, path, body) {
        const url = `${this.baseUrl}${path}`;
        const bodyStr = body != null ? JSON.stringify(body) : "";
        const headers = {
            "X-Shield-Key": this.apiKey,
            "Content-Type": "application/json",
        };
        if (this.hmacSecret) {
            const timestamp = Math.floor(Date.now() / 1000).toString();
            const bodyHash = crypto.createHash("sha256").update(bodyStr).digest("hex");
            const message = `${timestamp}.${method}.${path}.${bodyHash}`;
            const signature = crypto
                .createHmac("sha256", this.hmacSecret)
                .update(message)
                .digest("hex");
            headers["X-Shield-Signature"] = signature;
            headers["X-Shield-Timestamp"] = timestamp;
        }
        const fetchOptions = {
            method,
            headers,
        };
        if (body != null) {
            fetchOptions.body = bodyStr;
        }
        const response = await fetch(url, fetchOptions);
        if (!response.ok) {
            let errorBody = {};
            try {
                errorBody = await response.json();
            }
            catch {
                // response may not be JSON
            }
            throw new types_1.ShieldError(response.status, errorBody.code ?? "unknown_error", errorBody.message ?? response.statusText);
        }
        return response;
    }
    async _request(method, path, body) {
        const response = await this._rawRequest(method, path, body);
        return response.json();
    }
}
exports.ShieldClient = ShieldClient;
