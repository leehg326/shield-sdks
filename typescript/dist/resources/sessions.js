"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sessions = void 0;
class Sessions {
    constructor(request, rawRequest) {
        this._request = request;
        this._rawRequest = rawRequest;
    }
    async create(params) {
        return this._request("POST", "/sessions", params);
    }
    async retrieve(id) {
        return this._request("GET", `/sessions/${id}`);
    }
    async export(id, opts) {
        if (opts.format === "pdf") {
            return this._rawRequest("GET", `/sessions/${id}/export/${opts.format}`);
        }
        return this._request("GET", `/sessions/${id}/export/${opts.format}`);
    }
}
exports.Sessions = Sessions;
