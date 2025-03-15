import { z } from "zod";

export const CrateBranchValidation = z.object({
  name: z.string().min(1, "Branch name is required"),
  branchManagerName: z.string().min(1, "Branch manager name is required"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  phone: z.string(),
  email: z.string().email("Invalid email address"),
  address: z.string().min(1, "Address is required"),
  status: z.enum(["Active", "Disabled"]).default("Active"),
  role:z.string().optional()
});

export const UpadateBranchValidation = z.object({
  name: z.string().optional(),
  branchManagerName: z.string().optional(),
  password: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().email("Invalid email address").optional(),
  address: z.string().optional(),
  status: z.enum(["Active", "Disabled"]).optional(),
  role:z.string().optional()
});
export const BarnchValidations = {
  CrateBranchValidation,
  UpadateBranchValidation
}
