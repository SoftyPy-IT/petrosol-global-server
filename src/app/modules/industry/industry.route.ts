import { Router } from "express"
import { createIndustryController, deleteIndustryController, getAllIndustriesController, getIndustryByIdController, getIndustryBySlugController, updateIndustryController } from "./industry.controller"
import { createIndustryValidation, updateIndustryValidation } from "./industry.validation"
import validationRequest from "../../middlewares/validationRequest"

const router = Router()

router.post('/', validationRequest(createIndustryValidation), createIndustryController)
router.get('/', getAllIndustriesController)
router.get('/slug/:slug', getIndustryBySlugController)
router.get('/:id', getIndustryByIdController)
router.put('/:slug', validationRequest(updateIndustryValidation), updateIndustryController)
router.delete('/:slug', deleteIndustryController)

export const IndustryRoutes = router
