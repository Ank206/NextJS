import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import { error } from "console";
import { request } from "http";

export const getDataFromToken = (request: NextRequest) => {
  try {
    const encodedToken = request.cookies.get("token")?.value || "";
    const decodedToken: any = jwt.verify(
      encodedToken,
      process.env.SECRET_TOKEN!
    );
    return encodedToken;
  } catch (error: any) {}
};
