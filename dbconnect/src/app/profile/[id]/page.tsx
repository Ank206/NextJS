import React from "react";

const Profile = ({ params }: any) => {
  return (
    <div>
      <h1 className="font-mono text-2xl m-2">Profile Page</h1>
      <h1 className="font-mono text-2xl m-2">Hi, {params.id}</h1>
    </div>
  );
};

export default Profile;
