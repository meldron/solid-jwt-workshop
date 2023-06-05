import express from "express";
import jwt from "jsonwebtoken";
import { expressjwt } from "express-jwt";
import cors from "cors";
import { v4 as uuidv4 } from "uuid";

const app = express();

const SECRET = process.env.JWT_SHARED_SECRET ?? "Test";

const ANIMAL_FACTS = [
    "The heart of a shrimp is located in its head.",
    "A snail can sleep for three years.",
    "Slugs have four noses.",
    "Elephants are the only animal that can't jump.",
    "An ostrich's eye is bigger than its brain.",
    "Starfish can regrow their arms. In fact, a single arm can regenerate a whole body.",
    "Sea otters hold hands when they sleep to keep from drifting apart.",
    "A small child could swim through the veins of a blue whale.",
    "A housefly hums in the key of F.",
    "Giraffes have no vocal cords.",
    "Kangaroos can't walk backwards.",
    "Dolphins sleep with one eye open.",
    "A group of flamingos is called a flamboyance.",
    "It takes a sloth two weeks to digest its food.",
    "Nearly three percent of the ice in Antarctic glaciers is penguin urine.",
    "A cow gives nearly 200,000 glasses of milk in a lifetime.",
    "Bats always turn left when leaving a cave.",
    "Honeybees can recognize human faces.",
    "Penguins can jump 6 feet in the air.",
    "A crocodile cannot stick its tongue out.",
    "Butterflies taste with their feet.",
    "Ants never sleep.",
    "An octopus has three hearts.",
    "Frogs can't swallow with their eyes open.",
    "Bees have five eyes.",
    "Koalas sleep up to 22 hours a day.",
    "Cows have best friends.",
    "Polar bears have black skin under their white fur.",
    "Camels have three eyelids to protect their eyes from sand.",
    "Goats have rectangular pupils.",
];

function getRandomElement<T>(arr: T[]): T {
    if (arr.length === 0) {
        throw new Error("empty array");
    }
    const index = Math.floor(Math.random() * arr.length);
    return arr[index] as T;
}

// Middleware that validates JWT
app.use(
    expressjwt({
        secret: SECRET,
        algorithms: ["HS256"],
    }).unless({ path: ["/token"] }) // Paths that bypass the JWT validation
);

app.use(cors({ credentials: true }));

// Route to authenticate a user and return JWT
app.post("/token", (req, res) => {
    // Here, you'd normally validate the user's credentials.
    // For this example, let's skip that and return a token for any request.
    const token = jwt.sign({ user: uuidv4() }, SECRET, { expiresIn: "1h", issuer: "Facts Inc.", audience: "HDM" });

    res.json({ token });
});

// Route that requires a valid JWT to access
app.get("/protected", (req, res) => {
    const fact = getRandomElement(ANIMAL_FACTS);
    res.json({ fact });
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`);
});
