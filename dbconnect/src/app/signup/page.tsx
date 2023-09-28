"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const Page: React.FC = () => {
  const router = useRouter();
  const handleHomeClick = () => {
    setLoading(true);
    setTimeout(() => {
      router.push("/");
      setLoading(false);
    }, 500);
  };

  const [user, setUser] = React.useState({
    username: "",
    email: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = React.useState(true);
  const [loading, setLoading] = React.useState(false);

  const onSignUp = async () => {
    try {
      setLoading(true);
      const response = await axios.post("api/users/signup", user);
      console.log("SignUp success", response.data);
      router.push("/profile");
    } catch (error: any) {
      console.log("SignUp failed -", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 1 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else setButtonDisabled(true);
  }, [user]);

  return (
    <div>
      <div className="flex">
        <h1 className="font-mono text-2xl m-2">
          {loading ? "Loading" : "Sign Up"}
        </h1>
        {loading ? (
          <span className="loading loading-spinner text-success "></span>
        ) : (
          ""
        )}
      </div>
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
        {buttonDisabled ? "No Sign Up" : "Sign Up"}
      </button>
      <button className="btn btn-error m-2" onClick={handleHomeClick}>
        Home
      </button>
    </div>
  );
};

export default Page;
