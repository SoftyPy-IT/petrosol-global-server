import { Router } from "express";
import { createPartnerController, deletePartnerController, getAllPartnersController, getSinglePartnerController, updatePartnerController } from "./partner.controller";
import { createPartnerValidation, updatePartnerValidation } from "./partner.validation";
import validationRequest from "../../middlewares/validationRequest";

const router = Router();

router.post('/', validationRequest(createPartnerValidation), createPartnerController);
router.get('/', getAllPartnersController);
router.get('/:id', getSinglePartnerController);
router.put('/:id', validationRequest(updatePartnerValidation), updatePartnerController);
router.delete('/:id', deletePartnerController);

export const PartnerRoutes = router;
