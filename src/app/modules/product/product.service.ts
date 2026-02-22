import { Request } from "express";
// import { fileUploader } from "../../helper/fileUploader";
import prisma from "../../shared/prisma";
import { fileUploader } from "../../helper/fileUploader";

const createProduct = async (req: Request) => {
   console.log("Request body structure:", req.body);

   if (req.file) {
      const uploadResult = await fileUploader.uploadToCloudinary(req.file);

      const result = await prisma.product.create({
         data: {
            name: req.body.name,
            picture: uploadResult?.secure_url,
            sku: "SKU-" + Date.now(),
            price: req.body.price,
            stock: req.body.stock,
         },
      });

      return result;
   } else {
      throw new Error("No file uploaded");
   }
};

export const productService = {
   createProduct,
};
