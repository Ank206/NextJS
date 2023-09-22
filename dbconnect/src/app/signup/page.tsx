"use client";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const page = () => {
  const router = useRouter();
  const handleHomeClick = () => {
    router.push("/");
  };

  const [user, setUser] = React.useState({
    username: "",
    email: "",
    password: "",
  });

  const onSignUp = async () => {};

  return (
    <div>
      <h1 className="font-mono text-2xl m-2">Signup</h1>
      <div className="flex flex-col m-2">
        <label className="font-mono" htmlFor="username">
          Username
        </label>
        <input
          type="text"
          className="input input-bordered input-accent w-full max-w-xs font-mono"
          name="username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <label htmlFor="email" className="font-mono">
          Email
        </label>
        <input
          type="email"
          className="input font-mono input-bordered input-accent w-full max-w-xs"
          name="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <label htmlFor="passwd" className="font-mono">
          Password
        </label>
        <input
          type="password"
          className="input input-bordered font-mono input-accent w-full max-w-xs"
          name="passwd"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </div>
      <button className="btn btn-success m-2" onClick={onSignUp}>
        Sign Up
      </button>
      <button className="btn btn-error m-2" onClick={handleHomeClick}>
        Home
      </button>
    </div>
  );
};

export default page;
