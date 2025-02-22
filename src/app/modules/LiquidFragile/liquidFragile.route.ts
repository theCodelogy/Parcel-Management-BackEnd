
import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { LiquidFragileControllers } from './liquidFragile.controller';
import { LiquidFragileValidations } from './liquidFragile.validation';





const router = express.Router();
// create LiquidFragile
router.post(
  '/',
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
  LiquidFragileControllers.deleteSingleLiquidFragile,
);

export const LiquidFragileRoutes = router;
