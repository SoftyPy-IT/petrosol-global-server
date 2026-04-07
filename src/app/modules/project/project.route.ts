import { Router } from "express";
import { createProjectController, deleteProjectController, getAllProjectsController, getSingleProjectBySlugController, getSingleProjectController, updateProjectController } from "./project.controller";
import validationRequest from "../../middlewares/validationRequest";
import { createProjectValidation, updateProjectValidation } from "./project.validation";

const router = Router();

router.post('/', validationRequest(createProjectValidation), createProjectController);
router.get('/', getAllProjectsController);
router.get('/:id', getSingleProjectController);
router.get('/:slug', getSingleProjectBySlugController);
router.put('/:id', validationRequest(updateProjectValidation), updateProjectController);
router.delete('/:id', deleteProjectController);

export const ProjectRoutes = router;
