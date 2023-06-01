import express from "express";
import Todo from "../models/todo.js";

const router = express.Router();

router.post("/new", async (req, res) => {
  const { text, author } = req.body;

  try {
    await Todo.create({
      text,
      author,
    });

    res.send("Success");
  } catch (error) {
    res.status(500).send("Unable to create entry, " + error.message);
  }
});

router.get("/all", async (req, res) => {
  const todos = await Todo.find();

  return res.status(200).json(todos);
});

export default router;
