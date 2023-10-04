import React from "react";
import { users } from "@/data/users";

const MockPage: React.FC = () => {
  return (
    <div>
      {users.map((user) => (
        <div key={user.username}>{JSON.stringify(user)}</div>
      ))}
    </div>
  );
};

export default MockPage;
