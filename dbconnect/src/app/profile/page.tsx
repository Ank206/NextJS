"use client";
import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const Profile = () => {
  const router = useRouter();

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      console.log("Logout Succesful");
      router.push("/login");
    } catch (error: any) {
      console.log("Logout Error");
      console.log(error.message);
    }
  };

  return (
    <div>
      <h1 className="font-mono text-2xl m-2">Profile Page</h1>
      <button className="btn btn-error m-2" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default Profile;
