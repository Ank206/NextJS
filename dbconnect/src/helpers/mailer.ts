// domain.com/verifytoken/asdas4234jf
// domain.com/verfiytoken?token=asdas4234jf

// * the first approach is good if you are utilizin the token in the backend portion of your application, but if you are utilizing the token in the frontend portion of your application, preffered approach to use is the second approach

import nodemailer from "nodemailer";
import User from "@/models/usermodel";
import bcryptjs from "bcryptjs";
import { constrainedMemory } from "process";

export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);

    if (emailType == "VERIFY") {
      const us = await User.findById(userId);

      us.verifyToken = hashedToken;
      us.verifyTokenExpiry = Date.now() + 3600000;

      await us.save();

      // console.log("If block implemented");
      // console.log("Object ID is : ", userId);
      // console.log(us);
      // console.log("VERIFY - ", hashedToken);
    } else if (emailType === "RESET") {
      await User.findById(userId, {
        forgotPasswordSToken: hashedToken,
        forgotPasswordTokenExpiry: Date.now() + 36000000,
      });
    }

    const transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.NODEM_USER,
        pass: process.env.NODEM_PASS,
      },
    });

    const mailOptions = {
      from: "akapoor1_be22@thapar.edu",
      to: email,
      subject:
        emailType == "VERIFY"
          ? "For e-mail verification"
          : "For Password updation",
      html: `<p>Click <a href="${
        process.env.domain
      }/verifyemail?token=${hashedToken}">here</a> to ${
        emailType == "VERIFY" ? "verify email" : "update password"
      }</p>`,
    };

    const mailResponse = await transport.sendMail(mailOptions);
    return mailResponse;
  } catch (error: any) {
    console.log("Mailin Error - ", error);
    throw new Error(error.message);
  }
};
