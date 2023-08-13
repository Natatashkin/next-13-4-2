import React from "react";
import { getUserById } from "@/app/lib/users/getAllUsers";

const UserPage = async () => {
  const user = await getUserById(1);
  return (
    <div>
      <h1>UserPage</h1>
      <div>
        Username: <span>{user.name}</span>
        User Email: <span>{user.email}</span>
      </div>
    </div>
  );
};

export default UserPage;
