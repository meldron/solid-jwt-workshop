import { createStore, produce } from "solid-js/store";
import { JWT, JWTHeader, parseJwt } from "../jwt";
import { createMemo } from "solid-js";

export interface TokenStore {
    tokenRaw: string;
    secret: string;
}

function createDefaultTokenStore(): TokenStore {
    return { tokenRaw: "", secret: "" };
}

const [tokenStore, setTokenStore] = createStore<TokenStore>(createDefaultTokenStore());

const token = createMemo<JWT | null>(() => parseJwt(tokenStore.tokenRaw));

export function setTokenRaw(tokenRaw: string) {
    setTokenStore(produce((s) => (s.tokenRaw = tokenRaw)));
}

export function setSecret(secret: string) {
    setTokenStore(produce((s) => (s.secret = secret)));
}

export function getTokenRaw(): string {
    return tokenStore.tokenRaw;
}

export function getToken(): JWT | null {
    return token();
}

export function getHeader(): JWTHeader | null {
    return token()?.header ?? null;
}

export function getPayload(): Record<string, unknown> | null {
    return token()?.payload ?? null;
}

export function getSignature(): string | null {
    return token()?.signature ?? null;
}

export function getSecret(): string {
    return tokenStore.secret;
}
