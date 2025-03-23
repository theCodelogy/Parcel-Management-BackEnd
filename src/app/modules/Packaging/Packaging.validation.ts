import { z } from "zod";

 const CreatePackaginValidation = z.object({
  Poly: z.number().min(1),
  bubblePoly: z.number().min(1),
  Box: z.number().min(1),
  boxPolly: z.number().min(1),
});

 const updatePackagingValidation= z.object({
  Poly: z.number().min(1).optional(),
  bubblePoly: z.number().min(1).optional(),
  Box: z.number().min(1).optional(),
  boxPolly: z.number().min(1).optional(),
});



export const PackagingValidations = {
  CreatePackaginValidation,
  updatePackagingValidation
}
