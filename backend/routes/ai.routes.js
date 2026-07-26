import express from "express";
import { generateContent } from "../controllers/ai.controller.js";

const router = express.Router();

router.post("/generate", generateContent);

export default router;