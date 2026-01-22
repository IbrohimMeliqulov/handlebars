import { users } from "../../server.js";
import { ObjectId } from "mongodb";

const POST = async (req, res) => {
  const user = await users.insertOne(req.body);
  return res.status(201).json(user);
};

const GET = async (req, res) => {
  const allUsers = await users.find().toArray();
  return res.status(200).json(allUsers);
};

const DELETE = async (req, res) => {
  const { id } = req.params;
  const deletedUser = await users.deleteOne({ _id: new ObjectId(id) });
  return res.status(200).json(deletedUser);
};

const UPDATE = async (req, res) => {
  const { id } = req.params;
  const update = { $set: req.body };
  const result = await users.updateOne({ _id: new ObjectId(id) }, update);
  return res.status(200).json(result);
};

export { POST, GET, DELETE, UPDATE };
