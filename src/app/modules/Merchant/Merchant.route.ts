import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { MerchantValidation } from './Merchant.validation';
import { MerchantControllers } from './Merchant.controller';
import auth from '../../middlewares/auth';





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
  auth("Super Admin"),
  MerchantControllers.getAllMerchant,
);

// update single Merchant
router.patch(
  '/:id',
  auth("Super Admin","Merchant"),
  validateRequest(MerchantValidation.UpdateMerchantValidation),
  MerchantControllers.updateMerchant,
);

// Get single Merchant
router.get(
  '/:id',
  auth("Super Admin","Merchant"),
  MerchantControllers.getSingleMerchant,
);

// delete single Merchant
router.delete(
  '/:id',
  auth("Super Admin"),
  MerchantControllers.deleteSingleMerchant,
);

export const MerchantRoutes = router;
