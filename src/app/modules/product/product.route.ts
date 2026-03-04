import express, { NextFunction, Request, Response } from "express";

import auth from "../../middlewares/auth";
import { userRole } from "@prisma/client";
import { ProductController } from "./product.controller";
import { file } from "zod";
import { fileUploader } from "../../helper/fileUploader";
import { userValidation } from "../user/user.validation";
import { productValidation } from "./product.validation";
// import { UserRole } from "@prisma/client";

const router = express.Router();
router.get("/all", auth(userRole.ADMIN), ProductController.getAllProducts);

router.post("/create", auth(userRole.ADMIN), fileUploader.upload.single("file"), (req: Request, res: Response, next: NextFunction) => {
   req.body = productValidation.productValidationSchema.parse(JSON.parse(req.body.data));

   return ProductController.createProduct(req, res, next);
});

router.delete("/:id", auth(userRole.ADMIN), ProductController.deleteFromDB);
export const ProductRoutes = router;
