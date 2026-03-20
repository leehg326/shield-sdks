"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Verify = void 0;
class Verify {
    constructor(request) {
        this._request = request;
    }
    async session(id) {
        return this._request("GET", `/sessions/${id}/verify`);
    }
}
exports.Verify = Verify;
