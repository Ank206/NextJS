import Image from "next/image";
// script.js

export default function Home() {
  return (
    <div>
      <h1 className="font-mono text-2xl">Connect to Mongo</h1>
      <div>
        <button className="btn btn-primary m-1">Login</button>
        <button className="btn btn-success m-1">Signup</button>
      </div>
    </div>
  );
}
