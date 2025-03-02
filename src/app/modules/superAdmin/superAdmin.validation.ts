import { z } from "zod";

// user creation schema
const createSuperAdminValidationSchema = z.object({
  name: z.string({
    invalid_type_error: "Name must be string",
  }),
  email: z.string().email({
    message: "Invalid email address",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters long",
  }),
  phone: z.string({
    invalid_type_error: "Phone must be string",
  }),
  address: z
    .string()
    .min(5, {
      message: "Address must be at least 5 characters long",
    })
    .max(100, {
      message: "Address must not exceed 100 characters",
    }),
    role: z.string(),
  status: z.enum(["Pending", "Active", "Disable"]).default("Pending"),
});

// user update schema
const updateSuperAdminValidationSchema = z.object({
  name: z.string({
    invalid_type_error: "Name must be string",
  }),
  email: z.string().email({
    message: "Invalid email address",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters long",
  }),
  phone: z.string({
    invalid_type_error: "Phone must be string",
  }),
  address: z
    .string()
    .min(5, {
      message: "Address must be at least 5 characters long",
    })
    .max(100, {
      message: "Address must not exceed 100 characters",
    }),
  role: z.string().optional(),
  status: z.enum(["Pending", "Active", "Disable"]).optional(),
});

export const UserValidation = {
  createSuperAdminValidationSchema,
  updateSuperAdminValidationSchema,
};
