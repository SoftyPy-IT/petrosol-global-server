import { Router } from 'express';
import { userRoute } from '../modules/user/user.route';
import { authRoute } from '../modules/auth/auth.route';
import { BannerRoutes } from '../modules/banner/banner.route';
import { CareerRoutes } from '../modules/career/career.route';
import { ContactRoutes } from '../modules/contact/contact.route';
import { ProjectRoutes } from '../modules/project/project.route';
import { BlogRoutes } from '../modules/blog/blog.route';
import { PartnerRoutes } from '../modules/partner/partner.route';
import { ManagingRoutes } from '../modules/managing/managing.route';
import { IndustryRoutes } from '../modules/industry/industry.route';

const router = Router();

const routeModules = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/user',
    route: userRoute,
  },
  {
    path: '/banner',
    route: BannerRoutes,
  },
  {
    path: '/partner',
    route: PartnerRoutes,
  },
  {
    path: '/managing',
    route: ManagingRoutes,
  },
  {
    path: '/industry',
    route: IndustryRoutes,
  },
  {
    path: '/blog',
    route: BlogRoutes,
  },
  {
    path: '/partner',
    route: PartnerRoutes,
  },
  {
    path: '/project',
    route: ProjectRoutes,
  },
  {
    path: '/career',
    route: CareerRoutes,
  },
  {
    path: '/contact',
    route: ContactRoutes,
  },
];

routeModules.forEach((route) => router.use(route.path, route?.route));

export default router;
