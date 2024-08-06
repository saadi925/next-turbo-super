"use server";
import { LoginSchema} from "~/schemas";
import * as z from "zod";
import { db } from "~/lib/db";
import { signIn } from "~/auth";
import { AuthError } from "next-auth";
import { createVerificationToken } from "~/data/verification-token";
import { MessageResponse } from "~/types/auth";
import { sendEmailVerification } from "./common";



export async function signInAction(
    data: z.infer<typeof LoginSchema>,
  ): Promise<MessageResponse> {
      const validate = await LoginSchema.safeParseAsync(data);
      if (!validate.success) {
          return {
              message: validate.error.errors[0].message,
        success: false,
    };
}

const { email, password } = validate.data;
const user = await db.user.findUnique({
    where: { email },
});
const ERROR_INVALID_CREDENTIALS = "Invalid credentials";  
// if user is not found or email or password is not provided
if (!user || !user.email || !user.password) {
    return {
        message: ERROR_INVALID_CREDENTIALS,
        success: false,
    };
}
// if user is not verified
if (!user.emailVerified) {
    const token = await createVerificationToken(email);
    if (!token) return { message: "Something went wrong!", success: false };
    await sendEmailVerification(email, token?.token);
    return {
        message: "Confirmation Email Sent",
        success: true,
      };
    }
    try {
      await signIn("credentials", {
        email,
        password,
      });
      return {
        message: "Sign In Sucessfully",
        success: true,
      };
    } catch (error) {
      if (error instanceof AuthError) {
        switch (error.type) {
          case "CredentialsSignin":
            return { message: ERROR_INVALID_CREDENTIALS, success: false };
          default:
            return { message: "Something went wrong!", success: false };
        }
      }
  
      throw error;
    }
  }
  


  import {  signOut } from "~/auth";
export { signOut };