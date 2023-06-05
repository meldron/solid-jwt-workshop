import { Component } from "solid-js";

export interface TokenInputProps {
    tokenRaw: string;
    setTokenRaw: (value: string) => void;
}

export const TokenInput: Component<TokenInputProps> = (props) => {
    return (
        <div>
            <h2 class="text-red-900">Token</h2>
            <div class="form-control w-full mt-2">
                <textarea
                    onInput={(event) => props.setTokenRaw(event.target.value)}
                    class="textarea border-blue-400 focus:outline-blue-400"
                    placeholder="JWT Input"
                >
                    {props.tokenRaw}
                </textarea>
            </div>
        </div>
    );
};
