import express, { NextFunction, Request, Response } from "express";

import { userRole } from "@prisma/client";

import auth from "../../middlewares/auth";
import { file } from "zod";
// import { fileUploader } from "../../helper/fileUploader";
// import { userValidation } from "../user/user.validation";
import { MassageController } from "./massage.controller";

// import { UserRole } from "@prisma/client";

const router = express.Router();

router.get("/get-all", MassageController.getAllMassages);  
router.get("/get/:id", MassageController.getMassageById); 

router.post("/create",auth(userRole.USER), MassageController.createMassage);
export const MassageRoutes = router;