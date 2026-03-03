import { ErrorMessages } from "@/app/error/error_messages";
import { RegisterModel, RegisterRequest } from "@/app/models/users/models";
import CreateUserRepository from "@/app/repository/users/create_user";
import * as bcrypt from "bcrypt";
export default async function CreateUserService(
  registerRequest: RegisterRequest,
): Promise<string> {
  let hashedPasswrod: string = "";
  bcrypt.hash(registerRequest.Password, 10, (err, result) => {
    if (err) {
      return err.message;
    }
    hashedPasswrod = result;
  });
  let registerModel: RegisterModel = {
    Email: registerRequest.Email,
    Password: registerRequest.Password,
    UserName: registerRequest.UserName,
    CreatedAt: Date.now(),
  };
  let createUserRepository = await CreateUserRepository(registerModel);
  if (
    createUserRepository !== "" &&
    createUserRepository === ErrorMessages.RegisteredEmailError
  ) {
  }
  return "";
}
