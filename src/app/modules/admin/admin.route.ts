// import { NextFunction, Request, Response, Router } from "express";
// import { fileUploader } from "../../helper/fileUploader";
// import { adminValidation } from "./admin.validation";
// import { adminController } from "./admin.controller";



// const router = Router();

// router.post("/create", fileUploader.upload.single("file"), (req: Request, res: Response, next: NextFunction) => {
//    req.body = adminValidation.createAdmin.parse(JSON.parse(req.body.data));
//    return adminController.createAdmin(req, res, next);
// });

// export const adminRouter = router;
