import type { ShieldSession, CreateSessionParams, ExportFormat } from "../types";
export declare class Sessions {
    private _request;
    private _rawRequest;
    constructor(request: (method: string, path: string, body?: unknown) => Promise<unknown>, rawRequest: (method: string, path: string, body?: unknown) => Promise<Response>);
    create(params: CreateSessionParams): Promise<ShieldSession>;
    retrieve(id: string): Promise<ShieldSession>;
    export(id: string, opts: {
        format: ExportFormat;
    }): Promise<Response | unknown>;
}
