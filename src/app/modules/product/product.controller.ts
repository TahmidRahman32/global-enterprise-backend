import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import { productService } from "./product.service";
import sendResponse from "../../shared/sendResponse";

const createProduct = catchAsync(async (req: Request, res: Response) => {
   // console.log("data", req);
   const result = await productService.createProduct(req);
   console.log(result);
   sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Product created successfully",
      data: result,
   });
});

export const ProductController = {
  createProduct,
};
