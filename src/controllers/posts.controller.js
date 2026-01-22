import { ObjectId } from "mongodb";
import { posts } from "../../server.js";

const POST = async (req, res) => {
  const result = await posts.insertOne(req.body);
  return res.status(201).json(result);
};

const GET = async (req, res) => {
  const result = await posts.find().toArray();
  return res.status(200).json(result);
};

const UPDATE = async (req, res) => {
  const { id } = req.params;
  const updatedPost = await posts.updateOne(
    { _id: new ObjectId(id) },
    { $set: req.body },
  );
  return res.status(200).json(updatedPost);
};

const DELETE = async (req, res) => {
  const { id } = req.params;
  const deletedPost = await posts.deleteOne({ _id: new ObjectId(id) });
  return res.status(200).json(deletedPost);
};

export { POST, GET, UPDATE, DELETE };
