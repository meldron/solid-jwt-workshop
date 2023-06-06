const SERVER_URL = "http://localhost:5000";

export async function genericFetch<T = unknown>(url: string, options: RequestInit, maxTime: number): Promise<T> {
    const controller = new AbortController();
    const timeout = setTimeout(() => {
        controller.abort();
    }, maxTime);

    try {
        const response = await fetch(`${SERVER_URL}${url}`, { ...options, signal: controller.signal });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = (await response.json()) as T;
        return data;
    } finally {
        clearTimeout(timeout);
    }
}

export async function requestToken(): Promise<string> {
    const result = await genericFetch<{ token: string }>(
        "/token",
        {
            method: "POST",
            mode: "cors",
        },
        5000
    );

    return result.token;
}

export async function getFact(token: string): Promise<{ fact: string }> {
    if (token.length === 0) {
        return Promise.reject(new Error("no token"));
    }

    return genericFetch<{ fact: string }>(
        "/fact/",
        {
            method: "GET",
            mode: "cors",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        },
        5000
    );
}
