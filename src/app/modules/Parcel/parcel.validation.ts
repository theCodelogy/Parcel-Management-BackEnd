import { z } from "zod";


const CreateParcelValidation = z.object({
  merchant: z.string(),
  pickupPoints: z.string().min(1),
  pickupPhone: z.string().min(1),
  pickupAddress: z.string().min(1),
  cashCollection: z.number().min(0),
  sellingPrice: z.number().min(0),
  invoice: z.string().min(1),
  deliveryType: z.enum(["Same Day", "Next Day", "Sub City", "Outside City"]),
  category: z.number().min(0),
  customerName: z.string().min(1),
  customerPhone: z.string().min(1),
  customerAddress: z.string().min(1),
  note: z.string().optional(),
  packaging: z.enum(["Poly", "Bubble Poly", "Box", "Box Poly"]),
  priority: z.enum(["Normal", "High"]),
  paymentMethod: z.enum(["COD"]),
  deliveryCharge: z.number().min(0),
  codCharge: z.number().min(0),
  totalCharge: z.number().min(0),
  vat: z.number().min(0),
  netPayable: z.number().min(0),
  currentPayable: z.number().min(0),
});



const UpdateParcelValidation = z.object({
  merchant: z.string().optional(),
  pickupPoints: z.string().min(1).optional(),
  pickupPhone: z.string().min(1).optional(),
  pickupAddress: z.string().min(1).optional(),
  cashCollection: z.number().min(0).optional(),
  sellingPrice: z.number().min(0).optional(),
  invoice: z.string().min(1).optional(),
  deliveryType: z.enum(["Same Day", "Next Day", "Sub City", "Outside City"]).optional(),
  category: z.number().min(0).optional(),
  customerName: z.string().min(1).optional(),
  customerPhone: z.string().min(1).optional(),
  customerAddress: z.string().min(1).optional(),
  note: z.string().optional().optional(),
  packaging: z.enum(["Poly", "Bubble Poly", "Box", "Box Poly"]).optional(),
  priority: z.enum(["Normal", "High"]).optional(),
  paymentMethod: z.enum(["COD"]).optional(),
  deliveryCharge: z.number().min(0).optional(),
  codCharge: z.number().min(0).optional(),
  totalCharge: z.number().min(0).optional(),
  vat: z.number().min(0).optional(),
  netPayable: z.number().min(0).optional(),
  currentPayable: z.number().min(0).optional(),
})

export const ParcelValidation = {
  CreateParcelValidation,
  UpdateParcelValidation
};


