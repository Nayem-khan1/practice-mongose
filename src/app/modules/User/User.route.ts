import express from "express";
import { createUserData } from "./User.controller";
const router = express.Router();

router.get('/', createUserData)

export default router;