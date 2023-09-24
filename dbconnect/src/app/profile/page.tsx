"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const Profile = () => {
  const router = useRouter();
  const [data, setData] = useState("");
  const [uname, setUname] = useState("");

  const getUserDetails = async () => {
    const res = await axios.get("/api/users/ind");
    console.log(res.data);
    setData(res.data.data._id);
    setUname(res.data.data.username);
  };

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

  // getUserDetails();
  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <div>
      <h1 className="font-mono text-2xl m-2">Profile Page</h1>
      <hr />
      <h1 className="font-mono text-2xl m-2">{uname ? `Hi,${uname}` : ``}</h1>
      <h1 className="font-mono text-2xl m-2">
        {data ? `This is your user id, ${data}` : ``}
      </h1>
      <h1 className="font-mono text-2xl m-2">Thanks for Logginng in :)</h1>
      <button className="btn btn-error m-2" onClick={logout}>
        Logout
      </button>
      {/* <button className="btn btn-success m-2" onClick={getUserDetails}>
        Get User
      </button> */}
    </div>
  );
};

export default Profile;
