import React from "react";
import axios from "axios";

const Profile: React.FC = ({ params }: any) => {
  return (
    <div>
      <h1 className="font-mono text-2xl m-2">Profile Page</h1>
      <hr />
      <h1 className="font-mono text-2xl m-2">Hi,{params.id}</h1>
      <button className="btn btn-success m-2">Approach 1</button>
    </div>
  );
};

export default Profile;
