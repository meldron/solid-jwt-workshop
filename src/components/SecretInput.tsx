import { Component } from "solid-js";
import { getSecret, setSecret } from "../stores/tokenStore";

export const SecretInput: Component = () => {
    return (
        <div>
            <h2 class="text-red-900">Secret</h2>
            <div class="mt-2">
                <input
                    class="input w-full border-blue-400 focus:outline-blue-400"
                    placeholder="HS256 Secret"
                    value={getSecret()}
                    onInput={(event) => setSecret(event.target.value)}
                />
            </div>
        </div>
    );
};
