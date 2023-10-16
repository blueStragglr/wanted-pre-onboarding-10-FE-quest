type LoginResult = "success" | "fail"

interface LoginRequest {
  username: string,
  password: string
}

interface UserInfo {
  name: string;
  roles: "user" | "admin";
}

interface User {
  userId: number; 
  username: string;
  password: string;
  userInfo: UserInfo;
}

export const login = async (args: LoginRequest): Promise<LoginResult> => {
  const loginRes = await fetch("http://localhost:4000/auth/login", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      credentials: 'include'
    },
    body: JSON.stringify(args)
  })

  return loginRes.ok ? "success" : "fail";
}

export const getCurrentUserInfo = async (): Promise<User | null> => {
  const userInfoRes = await fetch("http://localhost:4000/profile", {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      credentials: 'include'
    }
  })

  return userInfoRes.ok ? userInfoRes.json() : null
}

export const logout = async () => {
  await fetch("http://localhost:4000/logout", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      credentials: 'include'
    }
  })
}