import type { ShieldSession, CreateSessionParams, ExportFormat } from "../types";

export class Sessions {
  private _request: (method: string, path: string, body?: unknown) => Promise<unknown>;
  private _rawRequest: (method: string, path: string, body?: unknown) => Promise<Response>;

  constructor(
    request: (method: string, path: string, body?: unknown) => Promise<unknown>,
    rawRequest: (method: string, path: string, body?: unknown) => Promise<Response>,
  ) {
    this._request = request;
    this._rawRequest = rawRequest;
  }

  async create(params: CreateSessionParams): Promise<ShieldSession> {
    return this._request("POST", "/sessions", params) as Promise<ShieldSession>;
  }

  async retrieve(id: string): Promise<ShieldSession> {
    return this._request("GET", `/sessions/${id}`) as Promise<ShieldSession>;
  }

  async export(id: string, opts: { format: ExportFormat }): Promise<Response | unknown> {
    if (opts.format === "pdf") {
      return this._rawRequest("GET", `/sessions/${id}/export/${opts.format}`);
    }
    return this._request("GET", `/sessions/${id}/export/${opts.format}`);
  }
}
