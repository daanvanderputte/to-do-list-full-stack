import mongoose from "mongoose";

const { Schema, model } = mongoose;

const todoSchema = new Schema({
  text: String,
  author: String,
  date: { type: Date, default: Date.now },
});

const Todo = model("Todo", todoSchema);

export default Todo