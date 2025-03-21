
import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { BarnchValidations } from './branch.validation';
import { BranchControllers } from './branch.controller';
import auth from '../../middlewares/auth';




const router = express.Router();
// create Branch
router.post(
  '/',
  // auth("Super Admin"),
  validateRequest(BarnchValidations.CrateBranchValidation),
  BranchControllers.createBranch,
);

// Get all Branch
router.get(
  '/',
  BranchControllers.getAllBranch,
);

// Update single Branch
router.patch(
  '/:id',
  // auth("Super Admin"),
  validateRequest(BarnchValidations.UpadateBranchValidation),
  BranchControllers.updateBranch,
);

// Get single Branch
router.get(
  '/:id',
  BranchControllers.getSingleBranch,
);

// delete single Branch
router.delete(
  '/:id',
  // auth("Super Admin"),
  BranchControllers.deleteSingleBranch,
);

export const BranchRoutes = router;
