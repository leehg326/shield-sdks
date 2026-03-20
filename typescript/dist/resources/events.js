"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Events = void 0;
class Events {
    constructor(request) {
        this._request = request;
    }
    async create(params) {
        const { session_id, ...body } = params;
        return this._request("POST", `/sessions/${session_id}/events`, body);
    }
}
exports.Events = Events;
