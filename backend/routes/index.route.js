import express from "express";

const indexRouter = express.Router();

import {authRouter} from "./auth.route.js"
import {messageRouter} from "./message.route.js"
import {userRouter} from "./user.route.js"

indexRouter.use("/api/auth", authRouter);
indexRouter.use("/api/messages", messageRouter)
indexRouter.use("/api/users", userRouter)

export default indexRouter;