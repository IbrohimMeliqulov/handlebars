import { Router } from "express";
import {
  userSchema,
  userUpdateSchema,
} from "../validations/users.validation.js";
import { schemaFunction } from "../validations/schemaFunction.js";
import { DELETE, GET, POST, UPDATE } from "../controllers/users.controller.js";

export const userRouter = Router();

userRouter
  .post("/users", schemaFunction(userSchema), POST)
  .get("/users", GET)
  .put("/users/:id", schemaFunction(userUpdateSchema), UPDATE)
  .delete("/users/:id", DELETE);
