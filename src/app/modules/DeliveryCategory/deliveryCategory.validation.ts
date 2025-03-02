import { z } from "zod";

 const CreateDeliveryCategoryValidation = z.object({
  title: z.string(),
  status: z.enum(["Active", "Inactive"]),
  position: z.number().min(1)
});

 const updateDeliveryCategoryValidation= z.object({
  title: z.string().optional(),
  status: z.enum(["Active", "Inactive"]).optional(),
  position: z.number().optional()
});



export const DeliveryCategoryValidations = {
  CreateDeliveryCategoryValidation,
  updateDeliveryCategoryValidation
}
