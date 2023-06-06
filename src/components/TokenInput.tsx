import { Component, Show, createEffect, createResource } from "solid-js";
import { getTokenRaw, setTokenRaw } from "../stores/tokenStore";
import { requestToken } from "../facts";

export const TokenInput: Component = () => {
    const [data, { refetch }] = createResource(requestToken);

    createEffect(() => {
        setTokenRaw(data() ?? "");
    });

    return (
        <div class="grid grid-rows-3 items-center">
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
            <div class="mt-5 flex gap-2 align-middle items-center">
                <div>
                    <button onClick={refetch} class="btn btn-primary" disabled={data.loading}>
                        <Show when={data.loading}>⏳</Show> Get new Token
                    </button>
                </div>
                <Show when={data.error}>
                    <p>{data.error.message}</p>
                </Show>
            </div>
        </div>
    );
};
