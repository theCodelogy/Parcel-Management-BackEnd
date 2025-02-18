import { z } from "zod";

export const CreateDeliveryManValidation = z.object({
  deliveryCharge: z.number().min(0),
  returnCharge: z.number().min(0),
  pickupCharge: z.number().min(0),
  openingBalance: z.number().min(0),
  salary: z.number().min(0),
  hub: z.string().min(2),
  drivingLicence: z.string().min(5),
  image: z.string().optional(),
  email: z.string(),
});

export const DeliveryManValidation = {
  CreateDeliveryManValidation,
};
