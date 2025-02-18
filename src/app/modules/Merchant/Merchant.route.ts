import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { MerchantValidation } from './Merchant.validation';
import { MerchantControllers } from './Merchant.controller';





const router = express.Router();
// create Merchant
router.post(
  '/',
  validateRequest(MerchantValidation.CreateMerchantValidation),
  MerchantControllers.createMerchant,
);

// Get all Merchant
router.get(
  '/',
  MerchantControllers.getAllMerchant,
);

// Get all Merchant
router.patch(
  '/:id',
  validateRequest(MerchantValidation.UpdateMerchantValidation),
  MerchantControllers.updateMerchant,
);

// Get single Merchant
router.get(
  '/:id',
  MerchantControllers.getSingleMerchant,
);

// delete single Merchant
router.delete(
  '/:id',
  MerchantControllers.deleteSingleMerchant,
);

export const MerchantRoutes = router;
