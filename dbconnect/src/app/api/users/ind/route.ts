import { getDataFromToken } from "@/helpers/getDataFromToken";
import User from "@/models/usermodel";
import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";

connect();

export async function GET(params: NextRequest) {
  try {
    const tokenData = getDataFromToken(params);
    // const userData = await User.findOne({ _id: tokenData }).select("-password");
    return NextResponse.json({
      message: `User found ${tokenData}`,
      // data: userData,
      data: "TESTING",
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        // error: error.message,
        error: "Error at api/user/ind",
      },
      { status: 400 }
    );
  }
}
