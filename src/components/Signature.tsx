import { verify_jwt_hs256_signature } from "@meldron/jwt-helper";
import { Component, createMemo } from "solid-js";
import { JWT } from "../jwt";

export const Signature: Component<{ token: JWT | null; secret: string }> = (props) => {
    const signature = () => (props.token ? props.token.signature : "");

    const secretStatus = createMemo(() => {
        const encodedToken = props.token?.encoded ?? null;

        if (props.secret === "" || encodedToken === null) {
            return "Unknown";
        }

        if (verify_jwt_hs256_signature(props.secret, encodedToken)) {
            return "Valid";
        }

        return "Invalid";
    });

    return (
        <>
            <div class="grid align-middle">
                <h2 class="text-red-900">Signature</h2>
                <div class="mt-2 max-w-full break-all">{signature()}</div>
            </div>
            <div class="divider md:hidden" />
            <div class="grid align-middle">
                <h2 class="text-red-900">Status</h2>
                <div>{secretStatus()}</div>
            </div>
        </>
    );
};
