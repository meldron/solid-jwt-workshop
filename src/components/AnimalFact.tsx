import { Component, createSignal } from "solid-js";
import { getFact } from "../facts";

export const AnimalFact: Component = () => {
    const [fact, setFact] = createSignal("No Fact loaded");

    async function loadFact() {
        getFact().then(({ fact }) => setFact(fact));
    }

    return (
        <div class="grid grid-rows-3 items-center">
            <h2 class="text-red-900">Fact</h2>
            <div>{fact()}</div>
            <div class="mt-5 flex">
                <div>
                    <button onClick={loadFact} class="btn btn-primary">
                        Get new Fact
                    </button>
                </div>
            </div>
        </div>
    );
};
