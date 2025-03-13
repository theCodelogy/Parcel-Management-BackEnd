import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { DeliveryManValidation } from './deliveryMan.validation';
import { DeliveryManControllers } from './deliveryMan.controller';
import auth from '../../middlewares/auth';




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
  auth("Super Admin"),
  DeliveryManControllers.getAllDeliveryMans,
);

// Get single Delivery Man
router.get(
  '/:id',
  auth("Super Admin","Delivery Man"),
  DeliveryManControllers.getSingleDeliveryMan,
);

// Update Delivery Man
router.patch(
  '/:id',
  auth("Super Admin","Delivery Man"),
  validateRequest(DeliveryManValidation.UpdateDeliveryManValidation),
  DeliveryManControllers.updateleDeliveryMan,
);

// Delete single Delivery Man
router.delete(
  '/:id',
  auth("Super Admin"),
  DeliveryManControllers.deleteSingleDeliveryMan,
);


export const DeliveryManRoutes = router;
