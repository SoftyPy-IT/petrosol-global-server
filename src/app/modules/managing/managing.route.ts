import { Router } from "express";
import { createManagingController, deleteManagingController, getAllManagingController, getSingleManagingController, updateManagingController } from "./managing.controller";
import { createManagingValidation, updateManagingValidation } from "./managing.validation";
import validationRequest from "../../middlewares/validationRequest";

const router = Router();

router.post("/", validationRequest(createManagingValidation), createManagingController);
router.get("/", getAllManagingController);
router.get("/:id", getSingleManagingController);
router.put("/:id", validationRequest(updateManagingValidation), updateManagingController);
router.delete("/:id", deleteManagingController);

export const ManagingRoutes = router;
