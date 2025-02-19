import mongoose, { Schema } from "mongoose";
import { TToDo } from "./toDo.interface";

const ToDoSchema = new Schema<TToDo>(
  {
    title: { type: String, required: true },
    assign: { type: String, required: true }, // Can be a User ID (mongoose.Types.ObjectId)
    date: { type: Date, required: true },
    description: { type: String, required: true },
    status: { type: String, enum: ["Pending", "Active", "Inactive"], required: true },
  },
  { timestamps: true }
);

export const ToDo = mongoose.model<TToDo>("ToDo", ToDoSchema);
