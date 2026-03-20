import type { ShieldClientOptions } from "./types";
import { Sessions } from "./resources/sessions";
import { Events } from "./resources/events";
import { Verify } from "./resources/verify";
export declare class ShieldClient {
    private apiKey;
    private baseUrl;
    private hmacSecret?;
    sessions: Sessions;
    events: Events;
    verify: Verify;
    constructor(apiKey: string, options?: ShieldClientOptions);
    private _rawRequest;
    private _request;
}
