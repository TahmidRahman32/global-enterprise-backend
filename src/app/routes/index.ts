import express from "express";
// import { userRouter } from "../modules/user/user.route";
// import { authRouter } from "../modules/auth/auth.route";
// import { doctorRouter } from "../modules/doctor/doctor.route";
// import { adminRouter } from "../modules/admin/admin.route";
import { userRouter } from "../modules/user/user.route";
import path from "path";
import { authRoutes } from "../modules/auth/auth.route";
import { ProductRoutes } from "../modules/product/product.route";
import { MassageRoutes } from "../modules/massage/massage.route";

const router = express.Router();

const moduleRoutes = [
   {
      path: "/user",
      route: userRouter,
   },
   {
      path: "/auth",
      route: authRoutes
   },
   {
      path: "/product",
      route: ProductRoutes,
   },
  
   {
      path: "/massage",
      route: MassageRoutes,
   },
  
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
