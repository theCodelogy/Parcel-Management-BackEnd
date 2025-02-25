import { z } from "zod";

// Define Zod Schema
export const CreateMerchantValidation = z.object({
  businessName: z.string().min(2, "Business name must be at least 2 characters"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email format"),
  phone: z.string(),
  openingBalance: z.number().min(0, "Opening balance must be positive"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  vat: z.number().min(0, "VAT must be positive"),
  hub: z.string().min(2, "Hub name must be at least 2 characters"),
  nid: z.string().min(5, "NID must be at least 5 characters"),
  status: z.enum(["Pending", "Active", "Disabled"]).default("Pending"),
  tradeLicense: z.string().min(5, "Trade license must be at least 5 characters"),
  image: z.string().optional(),
  referenceName: z.string().min(2, "Reference name must be at least 2 characters"),
  referencePhone: z.string(),
  paymentPeriod: z.number().min(1, "Payment period must be at least 1 day"),
  walletUseActivation: z.boolean(),
  address: z.string().min(5, "Address must be at least 5 characters"),
  returnCharges: z.number().min(0, "Return charges must be positive"),
  codCharge: z.object({
    insideCity: z.number().min(0, "Inside city charge must be positive"),
    subCity: z.number().min(0, "Sub city charge must be positive"),
    outsideCity: z.number().min(0, "Outside city charge must be positive"),
  }),
});

export const UpdateMerchantValidation = z.object({
  businessName: z.string().min(2, "Business name must be at least 2 characters").optional(),
  name: z.string().min(2, "Name must be at least 2 characters").optional(),
  email: z.string().email("Invalid email format").optional(),
  phone: z.string().optional(),
  openingBalance: z.number().min(0, "Opening balance must be positive").optional(),
  password: z.string().min(6, "Password must be at least 6 characters").optional(),
  vat: z.number().min(0, "VAT must be positive").optional(),
  hub: z.string().min(2, "Hub name must be at least 2 characters").optional(),
  nid: z.string().min(5, "NID must be at least 5 characters").optional(),
  status: z.enum(["Pending", "Active", "Disabled"]).optional(),
  tradeLicense: z.string().min(5, "Trade license must be at least 5 characters").optional(),
  image: z.string().optional().optional(),
  referenceName: z.string().min(2, "Reference name must be at least 2 characters").optional(),
  referencePhone: z.string().optional(),
  paymentPeriod: z.number().min(1, "Payment period must be at least 1 day").optional(),
  walletUseActivation: z.boolean().optional(),
  address: z.string().min(5, "Address must be at least 5 characters").optional(),
  returnCharges: z.number().min(0, "Return charges must be positive").optional(),
  codCharge: z.object({
    insideCity: z.number().min(0, "Inside city charge must be positive").optional(),
    subCity: z.number().min(0, "Sub city charge must be positive").optional(),
    outsideCity: z.number().min(0, "Outside city charge must be positive").optional(),
  }).optional(),
  role: z.string().optional()
});




export const MerchantValidation = {
  CreateMerchantValidation,
  UpdateMerchantValidation
};
