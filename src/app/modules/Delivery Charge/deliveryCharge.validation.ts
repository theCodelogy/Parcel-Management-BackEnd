import { z } from "zod";

 const CreateDeliveryChargeValidation = z.object({
  category: z.string().min(1),
  weight: z.number().optional(),
  sameDay: z.number().min(0),
  nextDay: z.number().min(0),
  subCity: z.number().min(0),
  outsideCity: z.number().min(0),
  status: z.enum(["Active", "Inactive"]),
  position: z.number().min(1)
});

const UpdateDeliveryChargeValidation = z.object({
  category: z.string().min(1).optional(),
  weight: z.number().optional(),
  sameDay: z.number().min(0).optional(),
  nextDay: z.number().min(0).optional(),
  subCity: z.number().min(0).optional(),
  outsideCity: z.number().min(0).optional(),
  status: z.enum(["Active", "Inactive"]).optional(),
  position: z.number().min(1).optional()
});



export const deliveryChargeValidations = {
  CreateDeliveryChargeValidation,
  UpdateDeliveryChargeValidation
}
