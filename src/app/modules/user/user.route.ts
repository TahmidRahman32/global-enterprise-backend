import { NextFunction, Request, Response, Router } from "express";
import { useController } from "./user.controller";
import { fileUploader } from "../../helper/fileUploader";
import { userValidation } from "./user.validation";
import auth from "../../middlewares/auth";
import { userRole } from "@prisma/client";

const router = Router();

// router.get("/all", useController.getAllUser)

// router.post("/create", fileUploader.upload.single("file"), (req: Request, res: Response, next: NextFunction) => {
//    req.body = userValidation.createUserValidationSchema.parse(JSON.parse(req.body.data));
//    return useController.createUser(req, res, next);
// });
router.get("/all", useController.getAllUser);
router.get("/my-profile", auth(), useController.getMyProfile);

router.post("/create", useController.createUser);
router.patch("/update-my-profile", auth(userRole.ADMIN, userRole.USER, userRole.SUPER_ADMIN), fileUploader.upload.single("file"), (req: Request, res: Response, next: NextFunction) => {
   req.body = JSON.parse(req.body.data);
   return useController.updateMyProfile(req, res, next);
});

export const userRouter = router;
