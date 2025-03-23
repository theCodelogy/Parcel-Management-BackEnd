
import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { PackagingValidations } from './Packaging.validation';
import auth from '../../middlewares/auth';
import { PackagingControllers } from './Packaging.controller';





const router = express.Router();
// create Delivery Category
router.post(
  '/',
  // auth("Super Admin"),
  validateRequest(PackagingValidations.CreatePackaginValidation),
  PackagingControllers.createPackaging,
);

// Get all Delivery Category
router.get(
  '/',
  PackagingControllers.getAllPackaging,
);

// Update Delivery Category
router.patch(
  '/:id',
  // auth("Super Admin"),
  validateRequest(PackagingValidations.updatePackagingValidation),
  PackagingControllers.updatePackaging,
);

// Get single Delivery Category
router.get(
  '/:id',
  PackagingControllers.getSinglePackaging,
);

// delete single Delivery Category
router.delete(
  '/:id',
  // auth("Super Admin"),
  PackagingControllers.deleteSinglePackaging,
);

export const PackagingRoutes = router;
