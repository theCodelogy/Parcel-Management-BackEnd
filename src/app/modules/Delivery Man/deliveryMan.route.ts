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

export const DeliveryManRoutes = router;
