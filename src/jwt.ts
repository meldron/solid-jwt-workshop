export type JWTHeader = Record<string, string> & { alg: string; typ: string; kid?: string };

export interface JWT {
    header: Record<string, string> & { alg: string; typ: string; kid?: string };
    headerEncoded: string;
    payload: Record<string, unknown>;
    payloadEncoded: string;
    signature: string;
    encoded: string;
}

export function parseJwt(encoded: string): JWT | null {
    const parts = encoded.split(".");

    const headerEncoded = parts[0];
    const payloadEncoded = parts[1];
    const signature = parts[2];

    if (headerEncoded === undefined || payloadEncoded === undefined || signature === undefined) {
        return null;
    }

    let header: JWTHeader;
    let payload: Record<string, unknown>;

    try {
        header = JSON.parse(atob(headerEncoded));
        payload = JSON.parse(atob(payloadEncoded));
    } catch (err) {
        return null;
    }

    return { encoded, header, headerEncoded, payload, payloadEncoded, signature };
}
