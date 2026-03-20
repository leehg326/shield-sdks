import type { ShieldVerifyResult } from "../types";
export declare class Verify {
    private _request;
    constructor(request: (method: string, path: string, body?: unknown) => Promise<unknown>);
    session(id: string): Promise<ShieldVerifyResult>;
}
