import type { ShieldEvent, CreateEventParams } from "../types";

export class Events {
  private _request: (method: string, path: string, body?: unknown) => Promise<unknown>;

  constructor(request: (method: string, path: string, body?: unknown) => Promise<unknown>) {
    this._request = request;
  }

  async create(params: CreateEventParams): Promise<ShieldEvent> {
    const { session_id, ...body } = params;
    return this._request("POST", `/sessions/${session_id}/events`, body) as Promise<ShieldEvent>;
  }
}
