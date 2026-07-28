import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import express from "express";
import { requestLogger } from './middleware/logger.js';

const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use(requestLogger);

app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:5173",
  })
);

import aiRoutes from "./routes/ai.routes.js";
app.use("/api/ai", aiRoutes);

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {});
