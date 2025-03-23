import { z } from "zod";

 const CreateDeliveryChargeValidation = z.object({
  chargeList: z.object({
    sameDay: z.number().min(0, "Same day charge must be positive"),
    nextDay: z.number().min(0, "Next day charge must be positive"),
    subCity: z.number().min(0, "Sub city charge must be positive"),
    outsideCity: z.number().min(0, "Outside city charge must be positive"),
  }),
  increasePerKG: z.object({
    sameDay: z.number().min(0, "Same day increase per KG must be positive"),
    nextDay: z.number().min(0, "Next day increase per KG must be positive"),
    subCity: z.number().min(0, "Sub city increase per KG must be positive"),
    outsideCity: z.number().min(0, "Outside city increase per KG must be positive"),
  }),
});

const UpdateDeliveryChargeValidation = z.object({
  chargeList: z.object({
    sameDay: z.number().min(0, "Same day charge must be positive").optional(),
    nextDay: z.number().min(0, "Next day charge must be positive").optional(),
    subCity: z.number().min(0, "Sub city charge must be positive").optional(),
    outsideCity: z.number().min(0, "Outside city charge must be positive").optional(),
  }).optional(),
  increasePerKG: z.object({
    sameDay: z.number().min(0, "Same day increase per KG must be positive").optional(),
    nextDay: z.number().min(0, "Next day increase per KG must be positive").optional(),
    subCity: z.number().min(0, "Sub city increase per KG must be positive").optional(),
    outsideCity: z.number().min(0, "Outside city increase per KG must be positive").optional(),
  }).optional(),
});



export const deliveryChargeValidations = {
  CreateDeliveryChargeValidation,
  UpdateDeliveryChargeValidation
}
