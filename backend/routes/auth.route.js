import express from "express";
import {Router} from "express"
import {login,signup,logout} from "../controllers/auth.controller.js"

const authRouter = Router();

authRouter.post("/login", login)
authRouter.post("/signup", signup)
authRouter.post("/logout", logout)

export {authRouter}