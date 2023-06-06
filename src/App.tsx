import { Component, onMount } from "solid-js";

import { Header } from "./components/Header";
import { Payload } from "./components/Payload";
import { TokenInput } from "./components/TokenInput";
import { Signature } from "./components/Signature";
import { SecretInput } from "./components/SecretInput";
import { getHeader, getPayload, getSecret, getToken, setTokenRaw } from "./stores/tokenStore";
import { AnimalFact } from "./components/AnimalFact";

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
    onMount(() => setTokenRaw(exampleToken));

    return (
        <div class="grid m-5">
            <div class="grid gap-5 grid-cols-1 lg:grid-cols-2">
                <TokenInput />
                <div class="divider md:hidden" />
                <AnimalFact />
            </div>
            <div class="divider" />
            <div class="grid gap-1 grid-cols-1 lg:grid-cols-2">
                <Header header={getHeader()} />
                <div class="divider md:hidden" />
                <Payload payload={getPayload()} />
            </div>
            <div class="divider" />
            <div class="grid gap-5 grid-cols-1 lg:grid-cols-3 overflow-ellipsis">
                <SecretInput />
                <div class="divider md:hidden" />
                <Signature token={getToken()} secret={getSecret()} />
            </div>
        </div>
    );
};

export default App;
