import {getUserForSidebar} from "../controllers/user.controller.js"
import { checkerRoute } from "../middleware/checkerRoute.js";
import {Router} from "express"

const userRouter = Router()
userRouter.get("/", checkerRoute, getUserForSidebar)

export {userRouter}