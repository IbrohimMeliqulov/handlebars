import express from "express";
import { MongoClient, ObjectId } from "mongodb";

const app = express();
app.use(express.json());

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

let db, users;

!(async () => {
  db = client.db("mydb");
  users = db.collection("users");

  console.log("Mongodbga connection");
})();

app.post("/users", async (req, res) => {
  const result = await users.insertOne(req.body);
  res.json(result);
});

app.get("/users", async (req, res) => {
  const us = await users.find().toArray();
  res.json(us);
});

app.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  const { name, age } = req.body;
  const update = await users.updateOne(
    { _id: new ObjectId(id) },
    {
      $set: { name, age },
    },
  );
  res.json(update);
});

app.delete("/users", async (req, res) => {
  const { age } = req.body;
  //const del =await users.deleteOne({_id:new ObjectId(id)})
  const del = await users.deleteMany({ age });
  res.json(del);
});

app.listen(4545, () => {
  console.log("server is running");
});
