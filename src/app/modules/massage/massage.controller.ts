import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import { massageService } from "./massage.service";
import sendResponse from "../../shared/sendResponse";
import { IJWTPayload } from "../../shared/types/common";
import pick from "../../helper/pick";
import { userFilterableFields } from "./user.constant";
import httpStatus from "http-status";

const createMassage = catchAsync(async (req: Request & { user?: IJWTPayload }, res: Response) => {
   console.log("data", req.body, "user", req.user);

   
   const result = await massageService.massageCreate(req.user!, req.body);
   console.log(result);
   sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Massage created successfully",
      data: result,
   });
});

// const getAllMassages = catchAsync(async (req: Request, res: Response) => {
//    const result = await massageService.getAllMassages();
//    sendResponse(res, {  
//       statusCode: 200,
//       success: true,
//       message: "All Massages retrieved successfully",
//       data: result,
//    });
// });
const getAllMassages = catchAsync(async (req: Request, res: Response) => {
   const filters = pick(req.query, userFilterableFields);
   const options = pick(req.query, ["limit", "page", "sortBy", "sortOrder"]);

   const result = await massageService.getAllMassages(filters, options);

   sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Users data fetched!",
      meta: result.meta,
      data: result.data,
   });
});


const getMassageById = catchAsync(async (req: Request, res: Response) => {
   const { id } = req.params;
   const result = await massageService.getMassageById(id);  
   sendResponse(res, {  
      statusCode: 200,
      success: true,
      message: "Massage retrieved successfully",
      data: result,
   });
});

export const MassageController = {
   createMassage,
   getAllMassages,
   getMassageById,
};

