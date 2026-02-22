// import { Request, Response } from "express";
// import catchAsync from "../../shared/catchAsync";
// import sendResponse from "../../shared/sendResponse";
// import { adminService } from "./admin.service";

// const createAdmin = catchAsync(async (req: Request, res: Response) => {
//    // console.log("data", req.body);
//    const result = await adminService.createAdmin(req);
//    console.log(result);

//    sendResponse(res, {
//       statusCode: 201,
//       success: true,
//       message: "Admin created successfully",
//       data: result,
//    });
// });

// export const adminController = {
//    createAdmin,
// };
