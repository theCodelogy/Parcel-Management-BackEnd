import { z } from "zod";

export const CrateBranchValidation = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(10, "Phone must be at least 10 digits"),
  address: z.string().min(1, "Address is required"),
  status: z.enum(["Active", "Inactive"]).default("Active"),
});

export const UpadateBranchValidation = z.object({
  name: z.string().min(1, "Name is required").optional(),
  phone: z.string().min(10, "Phone must be at least 10 digits").optional(),
  address: z.string().min(1, "Address is required").optional(),
  status: z.enum(["Active", "Inactive"]).optional(),
});
export const BarnchValidations = {
  CrateBranchValidation,
  UpadateBranchValidation
}
