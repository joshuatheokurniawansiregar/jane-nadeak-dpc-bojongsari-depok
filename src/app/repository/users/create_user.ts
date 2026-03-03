import { ErrorMessages } from "@/app/error/error_messages";
import database_connection_pool from "@/app/libs/connection_pool";
import { RegisterModel } from "@/app/models/users/models";
import { DatabaseError, Query } from "pg";
export default async function CreateUserRepository(
  registerModel: RegisterModel,
): Promise<string> {
  const client = await database_connection_pool.connect();
  client.on("error", (err) => {
    return err.message;
  });
  const query = new Query(`INSERT INTO users VALUES($,$,$,$)`, [
    registerModel.UserName,
    registerModel.Email,
    registerModel.Password,
    registerModel.CreatedAt,
  ]);

  query.on("error", (err) => {
    return err.message;
  });
  query.on("end", async () => {
    await database_connection_pool.end();
  });

  const result = client.query(query);

  result.on("row", (row) => {
    if (row) {
      return ErrorMessages.RegisteredEmailError;
    }
  });
  result.on("error", (err) => {
    return err.message;
  });

  result.on("end", () => {});

  client.on("end", () => {
    client.release();
  });
  return "";
}
