import z from "zod";

const createUserValidationSchema = z.object({
   password: z.string().nonempty("Password is Required"),
   name: z.string().nonempty("name is Required"),
   email: z.string().nonempty("Email is Required"),
});

export const userValidation = {
   createUserValidationSchema,
};
