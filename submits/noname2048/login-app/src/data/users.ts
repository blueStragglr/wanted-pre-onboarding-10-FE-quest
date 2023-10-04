interface UserInfo {
  name: string;
}

interface User {
  username: string;
  password: string;
  info: UserInfo;
}

const users: User[] = [
  {
    username: "admin",
    password: "admin",
    info: {
      name: "Admin",
    },
  },
  {
    username: "user",
    password: "user",
    info: {
      name: "User",
    },
  },
];

export default users;
export { users };
