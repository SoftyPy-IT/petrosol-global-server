import { Router } from "express";
import { createBlogController, deleteBlogController, getAllBlogController, getBlogBySlugController, getSingleBlogController, updateBlogController } from "./blog.controller";
import { createBlogValidation, updateBlogValidation } from "./blog.validation";
import validationRequest from "../../middlewares/validationRequest";

const router = Router();

router.post('/', validationRequest(createBlogValidation), createBlogController);
router.get('/', getAllBlogController);
router.get('/:id', getSingleBlogController);
router.get('/slug/:slug', getBlogBySlugController);
router.put('/:id', validationRequest(updateBlogValidation), updateBlogController);
router.delete('/:id', deleteBlogController);

export const BlogRoutes = router;
