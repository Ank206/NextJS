"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleLogClick = () => {
    router.push("/login");
  };
  const handleSignClick = () => {
    router.push("/signup");
  };

  return (
    <div>
      <h1 className="font-mono text-2xl m-2">Connect to Mongo</h1>
      <div className="m-1">
        <button className="btn btn-primary m-1" onClick={handleLogClick}>
          Login
        </button>
        <button className="btn btn-success m-1" onClick={handleSignClick}>
          Signup
        </button>
      </div>
    </div>
  );
}
