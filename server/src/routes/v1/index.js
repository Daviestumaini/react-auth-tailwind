import { Router } from "express";
import authRouter from "./auth.js";
import { getUsers, getUserById } from "../../controllers/users.js";

const router = Router();

router.use("/auth", authRouter);

router.get("/users", getUsers);
router.get("/users/:id", getUserById);

export default router;