import { z } from "zod";

const loginValidationSchema = z.object({
  emailORphone: z.string({ required_error: "Email or Phone is required." }),
  password: z.string({ required_error: "Password is required" }),
});

const refreshTokenValidationSchema = z.object({
  refreshToken: z.string({
    required_error: "Refresh token is required!",
  }),
});

export const AuthValidation = {
  loginValidationSchema,
  refreshTokenValidationSchema,
};
