import { Component, Show } from "solid-js";
import { prettyStringify } from "../jwt";

export const Payload: Component<{ payload: Record<string, unknown> | null }> = (props) => {
    return (
        <div>
            <h2 class="text-red-900">Payload</h2>
            <div class="mt-2">
                <Show when={props.payload} fallback={<div>No Data</div>}>
                    {(payload) => <pre>{prettyStringify(payload())}</pre>}
                </Show>
            </div>
        </div>
    );
};
