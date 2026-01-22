import express from "express";
import { MongoClient, ObjectId } from "mongodb";
import { userRouter } from "./src/routes/users.routes.js";
import { postRouter } from "./src/routes/posts.routes.js";
const app = express();
app.use(express.json());
app.use(userRouter);
app.use(postRouter);

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

export let db, users, posts;

!(async () => {
  db = client.db("mydb");
  users = db.collection("users");
  posts = db.collection("posts");

  console.log("Mongodbga connection");
})();

app.listen(4545, () => {
  console.log("server is running");
});
