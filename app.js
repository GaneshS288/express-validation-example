import express from "express";
import UserSignupSchema from "./zodUserSchema.js";
import { z } from "zod/v4";

const app = express();
/** @type {Array<{name: string, password: string}>}*/
const db = [{ name: "ganesh", password: "Iamevil" }];

app.use(express.json());

app.post("/zod/user", async (req, res) => {
    const validationResult = UserSignupSchema.safeParse(req.body);

    if (validationResult.success === false) {
        const error = z.treeifyError(validationResult.error);
        res.status(400).json(error);
    } else {
        db.push(validationResult.data);
        res.status(201).json(db);
    }
});

app.listen(3000, () => console.log("server has started at port 3000"));
