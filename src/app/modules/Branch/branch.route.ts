
import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { BarnchValidations } from './branch.validation';
import { BranchControllers } from './branch.controller';




const router = express.Router();
// create Branch
router.post(
  '/',
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
  BranchControllers.deleteSingleBranch,
);

export const BranchRoutes = router;
