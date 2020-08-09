import * as users from "../controllers/userController.js";
import express from "express";
const userRouter = express.Router();

userRouter.post("/create", users.create);
userRouter.get("/:email1", users.get);
userRouter.delete("/delete/:email", users.remove);

export default userRouter;
