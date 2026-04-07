import { Router } from 'express';
import { userRoute } from '../modules/user/user.route';
import { authRoute } from '../modules/auth/auth.route';
import { BannerRoutes } from '../modules/banner/banner.route';
import { CareerRoutes } from '../modules/career/career.route';
import { ContactRoutes } from '../modules/contact/contact.route';

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
