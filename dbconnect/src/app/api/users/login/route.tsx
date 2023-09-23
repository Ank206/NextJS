import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/usermodel";
import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

connect();

export async function POST(request: NextRequest) {
  try {
    const req = await request.json();
    const { email, password } = req;
    console.log(req);

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { error: "User does  not exist" },
        { status: 400 }
      );
    }

    const validatePassword = await bcryptjs.compare(password, user.password);
    if (!validatePassword) {
      return NextResponse.json({ error: "Invalid Password" }, { status: 400 });
    }

    // token data preperation
    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };
    const token = await jwt.sign(tokenData, process.env.SECRET_TOKEN!, {
      expiresIn: "1d",
    });

    const response = NextResponse.json({
      message: "Login Sucessful",
      success: true,
    });

    response.cookies.set("token", token, {
      httpOnly: true,
    });

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
