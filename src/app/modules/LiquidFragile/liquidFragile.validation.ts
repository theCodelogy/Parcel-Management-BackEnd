import { z } from "zod";

 const CrateliquidFragileValidation = z.object({
  title: z.string().min(3),
  charge: z.number().min(0),
  status: z.enum(["Active", "Inactive"]),
});

export const updateliquidFragileValidation= z.object({
  title: z.string().min(3).optional(),
  charge: z.number().min(0).optional(),
  status: z.enum(["Active", "Inactive"]).optional(),
});



export const LiquidFragileValidations = {
  CrateliquidFragileValidation,
  updateliquidFragileValidation
}
