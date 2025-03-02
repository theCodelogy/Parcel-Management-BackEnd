
import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { DeliveryCategoryValidations } from './deliveryCategory.validation';
import { DeliveryCategoryControllers } from './deliveryCategory.controller';





const router = express.Router();
// create Delivery Category
router.post(
  '/',
  validateRequest(DeliveryCategoryValidations.CreateDeliveryCategoryValidation),
  DeliveryCategoryControllers.createDeliveryCategory,
);

// Get all Delivery Category
router.get(
  '/',
  DeliveryCategoryControllers.getAllDeliveryCategory,
);

// Update Delivery Category
router.patch(
  '/:id',
  validateRequest(DeliveryCategoryValidations.updateDeliveryCategoryValidation),
  DeliveryCategoryControllers.updateDeliveryCategory,
);

// Get single Delivery Category
router.get(
  '/:id',
  DeliveryCategoryControllers.getSingleDeliveryCategory,
);

// delete single Delivery Category
router.delete(
  '/:id',
  DeliveryCategoryControllers.deleteSingleDeliveryCategory,
);

export const DeliveryCategoryRoutes = router;
