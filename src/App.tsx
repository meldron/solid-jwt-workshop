import { Component, createMemo, createSignal } from "solid-js";

import { parseJwt } from "./jwt";
import { Header } from "./components/Header";
import { Payload } from "./components/Payload";
import { TokenInput } from "./components/TokenInput";
import { Signature } from "./components/Signature";
import { SecretInput } from "./components/SecretInput";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const JWT_EXAMPLE = {
    iss: "https://idm.planet.express",
    sub: "b0a290f1-1101-48d2-8adc-0992bbb207aa",
    name: "Philip Fry",
    aud: "s6BhdRkqt3",
    exp: 32503680000,
    iat: 32468096000,
    nbf: 32468096000,
    scope: "read",
};

const exampleToken =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2lkbS5wbGFuZXQuZXhwcmVzcyIsInN1YiI6ImIwYTI5MGYxLTExMDEtNDhkMi04YWRjLTA5OTJiYmIyMDdhYSIsIm5hbWUiOiJQaGlsaXAgRnJ5IiwiYXVkIjoiczZCaGRSa3F0MyIsImV4cCI6MzI1MDM2ODAwMDAsImlhdCI6MzI0NjgwOTYwMDAsIm5iZiI6MzI0NjgwOTYwMDAsInNjb3BlIjoicmVhZCJ9.ELoI9eFMeYgiiAOR8EBI_WVeNSG3I4bGyqxeZHuMLAA";

const App: Component = () => {
    const [tokenRaw, setTokenRaw] = createSignal(exampleToken);

    const token = createMemo(() => parseJwt(tokenRaw()));

    const [secret, setSecret] = createSignal("");

    return (
        <div class="grid m-5">
            <TokenInput tokenRaw={tokenRaw()} setTokenRaw={setTokenRaw} />
            <div class="divider" />
            <div class="grid gap-1 grid-cols-1 lg:grid-cols-2">
                <Header header={token()?.header} />
                <div class="divider md:hidden" />
                <Payload payload={token()?.payload} />
            </div>
            <div class="divider" />
            <div class="grid gap-5 grid-cols-1 lg:grid-cols-3 overflow-ellipsis">
                <SecretInput secret={secret()} setSecret={setSecret} />
                <div class="divider md:hidden" />
                <Signature token={token()} secret={secret()} />
            </div>
        </div>
    );
};

export default App;
