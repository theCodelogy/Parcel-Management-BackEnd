
import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { LiquidFragileControllers } from './liquidFragile.controller';
import { LiquidFragileValidations } from './liquidFragile.validation';
import auth from '../../middlewares/auth';





const router = express.Router();
// create LiquidFragile
router.post(
  '/',
  auth("Super Admin"),
  validateRequest(LiquidFragileValidations.CrateliquidFragileValidation),
  LiquidFragileControllers.createLiquidFragile,
);

// Get all LiquidFragile
router.get(
  '/',
  LiquidFragileControllers.getAllLiquidFragile,
);

// Update single LiquidFragile
router.patch(
  '/:id',
  auth("Super Admin"),
  validateRequest(LiquidFragileValidations.updateliquidFragileValidation),
  LiquidFragileControllers.updateLiquidFragile,
);

// Get single LiquidFragile
router.get(
  '/:id',
  LiquidFragileControllers.getSingleLiquidFragile,
);

// delete single LiquidFragile
router.delete(
  '/:id',
  auth("Super Admin"),
  LiquidFragileControllers.deleteSingleLiquidFragile,
);

export const LiquidFragileRoutes = router;
