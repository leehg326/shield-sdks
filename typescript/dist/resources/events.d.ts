import type { ShieldEvent, CreateEventParams } from "../types";
export declare class Events {
    private _request;
    constructor(request: (method: string, path: string, body?: unknown) => Promise<unknown>);
    create(params: CreateEventParams): Promise<ShieldEvent>;
}
