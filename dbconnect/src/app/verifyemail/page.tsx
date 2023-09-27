"use client";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const page = () => {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  const verifyUserEmail = async () => {
    try {
      await axios.post("/api/users/verifyemail", { token });
      setVerified(true);
    } catch (error: any) {
      setError(true);
      // console.log(token);
      // console.log(error.response.data);
    }
  };

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
  }, []);

  useEffect(() => {
    if (token.length > 0) {
      verifyUserEmail();
    }
  }, [token]);

  return (
    <div>
      This is the email verification page
      <div>Is Verified : {verified ? "True" : "No"}</div>
      <div>{error ? "Error encountered" : "Verification Done"}</div>
    </div>
  );
};

export default page;

//!! Remember that Verifying Your Email doesnot mean that you are logged it is jsut on the top layer and thus you have no cookie of credentials of the user thus the next step from here is to redirect the user to a login page so he can LOGIN to the website
