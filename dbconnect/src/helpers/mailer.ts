// domain.com/verifytoken/asdas4234jf
// domain.com/verfiytoken?token=asdas4234jf

// * the first approach is good if you are utilizin the token in the backend portion of your application, but if you are utilizing the token in the frontend portion of your application, preffered approach to use is the second approach

import nodemailer from "nodemailer";
import User from "@/models/usermodel";
import bcryptjs from "bcryptjs";

const trasnporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "1d2d87a7031caf",
    pass: "********39c9",
  },
});
