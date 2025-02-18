import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { DeliveryManValidation } from './deliveryMan.validation';
import { DeliveryManControllers } from './deliveryMan.controller';




const router = express.Router();
// create Delivery Man
router.post(
  '/',
  validateRequest(DeliveryManValidation.CreateDeliveryManValidation),
  DeliveryManControllers.createDeliveryMan,
);

// Get all Delivery Man
router.get(
  '/',
  DeliveryManControllers.getAllDeliveryMans,
);

// Get single Delivery Man
router.get(
  '/:id',
  DeliveryManControllers.getSingleDeliveryMan,
);

// Update Delivery Man
router.patch(
  '/:id',
  validateRequest(DeliveryManValidation.UpdateDeliveryManValidation),
  DeliveryManControllers.updateleDeliveryMan,
);

// Delete single Delivery Man
router.delete(
  '/:id',
  DeliveryManControllers.deleteSingleDeliveryMan,
);


export const DeliveryManRoutes = router;
