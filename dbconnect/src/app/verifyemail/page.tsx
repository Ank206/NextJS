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
      await axios.post("/api/users/mail", { token });
      setVerified(true);
    } catch (error: any) {
      setError(true);
      console.log(token);
      console.log(error.response.data);
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
      <div>{error ? "Error encountered" : ""}</div>
    </div>
  );
};

export default page;
