import { Router } from "express";
import { createCareerController, deleteCareerController, getAllCareersController, getCareerByIdController, getCareerBySlugController, updateCareerController } from "./career.controller";
import { createCareerValidation, updateCareerValidation } from "./career.validation";
import validationRequest from "../../middlewares/validationRequest";

const router = Router();

router.post('/', validationRequest(createCareerValidation), createCareerController);
router.get('/', getAllCareersController);
router.get('/:id', getCareerByIdController);
router.get('/slug/:slug', getCareerBySlugController);
router.put('/slug/:slug', validationRequest(updateCareerValidation), updateCareerController);
router.delete('/:slug', deleteCareerController);

export const CareerRoutes = router;

