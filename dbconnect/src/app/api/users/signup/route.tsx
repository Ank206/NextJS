import { connect } from "@/dbConfig/dbConfig";
import { sendEmail } from "@/helpers/mailer";
import User from "@/models/usermodel";
import axios from "axios";
import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { username, email, password } = reqBody;

    console.log(reqBody);

    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        {
          error: "User already exists",
        },
        {
          status: 400,
        }
      );
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    console.log(savedUser);

    // TODO: Send Verfication EMail

    try {
      await sendEmail({ email, emailType: "VERIFY", userId: savedUser._id });
    } catch (error: any) {
      return NextResponse.json(
        { error: `error at sendEmail ${error}` }
        // { status: 500 }
      );
    }

    return NextResponse.json({
      message: "User created successfully",
      success: true,
      id: savedUser._id,
      savedUser,
    });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(
      { error: "error at api/users/signup" },
      { status: 500 }
    );
  }
}
