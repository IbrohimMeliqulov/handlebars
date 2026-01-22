import { Router } from "express";
import { schemaFunction } from "../validations/schemaFunction.js";
import {
  postUpdateSchema,
  postSchema,
} from "../validations/posts.validation.js";
import { DELETE, GET, POST, UPDATE } from "../controllers/posts.controller.js";

export const postRouter = Router();

postRouter
  .post("/posts", schemaFunction(postSchema), POST)
  .get("/posts", GET)
  .delete("/posts/:id", DELETE)
  .put("/posts/:id", schemaFunction(postUpdateSchema), UPDATE);
