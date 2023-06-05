import { Component } from "solid-js";
import { getTokenRaw, setTokenRaw } from "../stores/tokenStore";

export const TokenInput: Component = () => {
    return (
        <div>
            <h2 class="text-red-900">Token</h2>
            <div class="form-control w-full mt-2">
                <textarea
                    onInput={(event) => setTokenRaw(event.target.value)}
                    class="textarea border-blue-400 focus:outline-blue-400"
                    placeholder="JWT Input"
                >
                    {getTokenRaw()}
                </textarea>
            </div>
        </div>
    );
};
