import { Component } from "solid-js";

export interface SecretInputProps {
    secret: string;
    setSecret: (value: string) => void;
}

export const SecretInput: Component<SecretInputProps> = (props) => {
    return (
        <div>
            <h2 class="text-red-900">Secret</h2>
            <div class="mt-2">
                <input
                    class="input w-full border-blue-400 focus:outline-blue-400"
                    placeholder="HS256 Secret"
                    value={props.secret}
                    onInput={(event) => props.setSecret(event.target.value)}
                />
            </div>
        </div>
    );
};
