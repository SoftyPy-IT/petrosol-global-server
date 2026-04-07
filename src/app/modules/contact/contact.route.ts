import { Router } from "express";
import { createContactController, deleteContactController, getAllContactsController, getContactBySlugController, updateContactController } from "./contact.controller";
import validationRequest from "../../middlewares/validationRequest";
import { createContactValidation, updateContactValidation } from "./contact.validation";

const router = Router();

router.post('/', validationRequest(createContactValidation), createContactController);
router.get('/', getAllContactsController);
router.get('/:slug', getContactBySlugController);
router.put('/:slug', validationRequest(updateContactValidation), updateContactController);
router.delete('/:slug', deleteContactController);

export const ContactRoutes = router;

