import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import { error } from "console";
import { request } from "http";

export async function getDataFromToken(request: NextRequest) {
  try {
    const encodedToken = request.cookies.get("token")?.value || "";
    const decodedToken: any = jwt.verify(
      encodedToken,
      process.env.SECRET_TOKEN!
    );
    return decodedToken.id;
  } catch (error: any) {
    return {
      message: "Error in the getDataFromToken",
    };
  }
}

/*
import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export async function getDataFromToken(request: NextRequest) {
  const token = request.cookies.get("token");

  if (!token) {
    return null;
  }

  try {
    const decodedToken = jwt.verify(token, process.env.SECRET_TOKEN);
    const id = decodedToken.id;

    return id;
  } catch (error) {
    return null;
  }
}
*/
