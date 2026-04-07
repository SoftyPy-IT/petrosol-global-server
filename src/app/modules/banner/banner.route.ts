import { Router } from "express";
import { createBannerController, deleteBannerController, getAllBannersController, getBannerByIdController, updateBannerController } from "./banner.controller";
import { bannerValidation } from "./banner.validation";
import validationRequest from "../../middlewares/validationRequest";

const router = Router();

router.post('/', validationRequest(bannerValidation.createBannerValidation), createBannerController);
router.get('/', getAllBannersController);
router.get('/:id', getBannerByIdController);
router.put('/:id', validationRequest(bannerValidation.updateBannerValidation), updateBannerController);
router.delete('/:id', deleteBannerController);

export const BannerRoutes = router;
