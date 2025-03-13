import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { DeliveryChargeQueryControllers } from './deliveryCharge.controller';
import { deliveryChargeValidations } from './deliveryCharge.validation';
import auth from '../../middlewares/auth';





const router = express.Router();
// create DeliveryCharge
router.post(
  '/',
  auth("Super Admin"),
  validateRequest(deliveryChargeValidations.CreateDeliveryChargeValidation),
  DeliveryChargeQueryControllers.createDeliveryCharge,
);

// Get all DeliveryCharge
router.get(
  '/',
  DeliveryChargeQueryControllers.getAllDeliveryCharge,
);

// Update single DeliveryCharge
router.patch(
  '/:id',
  auth("Super Admin"),
  validateRequest(deliveryChargeValidations.UpdateDeliveryChargeValidation),
  DeliveryChargeQueryControllers.updateDeliveryCharge,
);

// Get single DeliveryCharge
router.get(
  '/:id',
  DeliveryChargeQueryControllers.getSingleDeliveryCharge,
);

// delete single DeliveryCharge
router.delete(
  '/:id',
  auth("Super Admin"),
  DeliveryChargeQueryControllers.deleteSingleDeliveryCharge,
);

export const DeliveryChargeRoutes = router;
