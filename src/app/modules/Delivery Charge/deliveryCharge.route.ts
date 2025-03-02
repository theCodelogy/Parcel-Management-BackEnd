import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { DeliveryChargeQueryControllers } from './deliveryCharge.controller';
import { deliveryChargeValidations } from './deliveryCharge.validation';





const router = express.Router();
// create DeliveryCharge
router.post(
  '/',
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
  DeliveryChargeQueryControllers.deleteSingleDeliveryCharge,
);

export const DeliveryChargeRoutes = router;
