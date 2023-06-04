import { Component } from "solid-js";
import {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    sign_jwt_ed_dsa,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    sign_jwt_hs256,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    verify_jwt_ed_dsa_signature,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    verify_jwt_hs256_signature,
} from "@meldron/jwt-helper";
import { parseJwt } from "./jwt";

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

const tokenData = parseJwt(exampleToken);

const App: Component = () => {
    return (
        <div class="grid m-5">
            <div>
                <h2 class="text-red-900">Token</h2>
                <div class="form-control w-full mt-2">
                    <textarea
                        onInput={(event) => console.log(`JWT changed to: ${event.target.value}`)}
                        class="textarea border-blue-400 focus:outline-blue-400"
                        placeholder="JWT Input"
                    >
                        {exampleToken}
                    </textarea>
                </div>
            </div>
            <div class="divider" />
            <div class="grid gap-1 grid-cols-1 md:grid-cols-2">
                <div>
                    <h2 class="text-red-900">Header</h2>
                    <div class="mt-2">
                        <pre>{JSON.stringify(tokenData.header, null, 2)}</pre>
                    </div>
                </div>
                <div class="divider md:hidden" />
                <div>
                    <h2 class="text-red-900">Payload</h2>
                    <div class="mt-2">
                        <pre>{JSON.stringify(tokenData.payload, null, 2)}</pre>
                    </div>
                </div>
            </div>
            <div class="divider" />
            <div class="grid gap-5 grid-cols-1 md:grid-cols-3">
                <div>
                    <h2 class="text-red-900">Secret</h2>
                    <div class="mt-2">
                        <input class="input w-full border-blue-400 focus:outline-blue-400" placeholder="HS256 Secret" />
                    </div>
                </div>
                <div class="divider md:hidden" />
                <div class="grid align-middle">
                    <h2 class="text-red-900">Signature</h2>
                    <div class="mt-2">
                        <pre>{tokenData.signature}</pre>
                    </div>
                </div>
                <div class="divider md:hidden" />
                <div>
                    <h2 class="text-red-900">Status</h2>
                    <div>Unverified</div>
                </div>
            </div>
        </div>
    );
};

export default App;
