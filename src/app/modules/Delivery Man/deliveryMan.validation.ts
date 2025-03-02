import { z } from "zod";

 const CreateDeliveryManValidation = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email format"),
  phone: z.string(),
  deliveryCharge: z.number().min(0, "Delivery charge must be positive"),
  returnCharge: z.number().min(0, "Return charge must be positive"),
  pickupCharge: z.number().min(0, "Pickup charge must be positive"),
  openingBalance: z.number().min(0, "Opening balance must be positive"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  salary: z.number().min(0, "Salary must be positive"),
  status: z.enum(["Pending", "Active", "Disabled"]).default("Pending"),
  hub: z.string().min(2, "Hub name must be at least 2 characters"),
  drivingLicence: z.string(),
  image: z.string().optional(),
  address: z.string(),
  role: z.string()
});

const UpdateDeliveryManValidation = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").optional(),
  email: z.string().email("Invalid email format").optional(),
  phone: z.string().optional(),
  deliveryCharge: z.number().min(0, "Delivery charge must be positive").optional(),
  returnCharge: z.number().min(0, "Return charge must be positive").optional(),
  pickupCharge: z.number().min(0, "Pickup charge must be positive").optional(),
  openingBalance: z.number().min(0, "Opening balance must be positive").optional(),
  password: z.string().min(6, "Password must be at least 6 characters").optional(),
  salary: z.number().min(0, "Salary must be positive").optional(),
  status: z.enum(["Pending", "Active", "Disabled"]).optional(),
  hub: z.string().min(2, "Hub name must be at least 2 characters").optional(),
  drivingLicence: z.string().optional(),
  image: z.string().optional().optional(),
  address: z.string().optional(),
  role: z.string().optional()
});

export const DeliveryManValidation = {
  CreateDeliveryManValidation,
  UpdateDeliveryManValidation
};


