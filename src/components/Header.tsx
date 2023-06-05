import { Component, Show } from "solid-js";
import { JWTHeader, prettyStringify } from "../jwt";

export const Header: Component<{ header: JWTHeader | null }> = (props) => {
    return (
        <div>
            <h2 class="text-red-900">Header</h2>
            <div class="mt-2">
                <Show when={props.header} fallback={<div>No Data</div>}>
                    {(header) => <pre>{prettyStringify(header())}</pre>}
                </Show>
            </div>
        </div>
    );
};
