import type { ShieldVerifyResult } from "../types";

export class Verify {
  private _request: (method: string, path: string, body?: unknown) => Promise<unknown>;

  constructor(request: (method: string, path: string, body?: unknown) => Promise<unknown>) {
    this._request = request;
  }

  async session(id: string): Promise<ShieldVerifyResult> {
    return this._request("GET", `/sessions/${id}/verify`) as Promise<ShieldVerifyResult>;
  }
}
