// import { Request } from "express";
// import prisma from "../../shared/prisma";
// import { fileUploader } from "../../helper/fileUploader";
// import bcrypt from "bcryptjs";
// import config from "../../../config";
// const createAdmin = async (req: Request) => {
//    if (req.file) {
//       const uploadResult = await fileUploader.upLoadToCloudinary(req.file);
//       // console.log(uploadResult)
//       req.body.admin.profilePhoto = uploadResult?.secure_url;
//    }
//    const hashPassword = bcrypt.hash(req.body.password, Number(config.round));
//    const result = await prisma.$transaction(async (tnx) => {
//       await tnx.user.create({
//          data: {
//             email: req.body.admin.email,
//             password: (await hashPassword).toString(),
//          },
//       });

//       return await tnx.admin.create({
//          data: req.body.admin,
//       });
//    });
//    // console.log(result, "service file console");
//    return result;
// };

// export const adminService = {
//    createAdmin
// };
