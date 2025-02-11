import express from "express";
import { Router } from "express";
import { sendMessage, getMessages} from "../controllers/message.controller.js";
import { checkerRoute } from "../middleware/checkerRoute.js";
const messageRouter = Router();

messageRouter.post("/send/:id", checkerRoute, sendMessage);
messageRouter.get("/:id", checkerRoute, getMessages)
export { messageRouter };
