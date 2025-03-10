import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ParcelValidation } from './parcel.validation';
import { ParcelControllers } from './parcel.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../auth/auth.constait';





const router = express.Router();
// create parcel
router.post(
  '/',
  auth(USER_ROLE['Super Admin'],USER_ROLE.Merchant),
  validateRequest(ParcelValidation.CreateParcelValidation),
  ParcelControllers.createParcel,
);

// Get all parcel
router.get(
  '/',
  ParcelControllers.getAllParcels,
);

// Get single parcel
router.get(
  '/:id',
  ParcelControllers.getSingleParcel,
);

// Update parcel
router.patch(
  '/:id',
  validateRequest(ParcelValidation.UpdateParcelValidation),
  ParcelControllers.updateleParcel,
);

// Update parcel
router.put(
  '/:id',
  auth("Delivery Man","Super Admin"),
  validateRequest(ParcelValidation.UpdateParcelValidation),
  ParcelControllers.updateleParcelStaus,
);

// Delete single parcel
router.delete(
  '/:id',
  ParcelControllers.deleteSingleParcel,
);


export const ParcelRoutes = router;
