import { Router } from "express";
import authRouter from "./auth.js";
import { createUser, getUsers, getUserById } from "../../controllers/users.js";

const router = Router();

router.use("/auth", authRouter);

router.post("/users", createUser);
router.get("/users", getUsers);
router.get("/users/:id", getUserById);

export default router;