import { z } from "zod";

export const createToDoValidation= z.object({
  title: z.string().min(1, "Title is required"),
  assign: z.string().min(1, "Assign field is required"), // Could be a User ID
  date: z.coerce.date().refine((d) => d instanceof Date, { message: "Invalid date" }),
  description: z.string().min(1, "Description is required"),
  status: z.enum(["Pending", "Active", "Inactive"]),
});

export const updateToDoValidation= z.object({
  title: z.string().min(1, "Title is required"),
  assign: z.string().min(1, "Assign field is required"), // Could be a User ID
  date: z.coerce.date().refine((d) => d instanceof Date, { message: "Invalid date" }),
  description: z.string().min(1, "Description is required"),
  status: z.enum(["Pending", "Active", "Inactive"]),
});



export const ToDoValidations = {
  createToDoValidation,
  updateToDoValidation
}
