import { Router } from "express";
import { createCareerController, deleteCareerController, getAllCareersController, getCareerBySlugController, updateCareerController } from "./career.controller";
import { createCareerValidation, updateCareerValidation } from "./career.validation";
import validationRequest from "../../middlewares/validationRequest";

const router = Router();

router.post('/', validationRequest(createCareerValidation), createCareerController);
router.get('/', getAllCareersController);
router.get('/:slug', getCareerBySlugController);
router.put('/:slug', validationRequest(updateCareerValidation), updateCareerController);
router.delete('/:slug', deleteCareerController);

export const CareerRoutes = router;

