export type UserRole = 'user' | 'admin'

export interface UserInfo {
  name: string;
  roles: UserRole[]
}

export interface User {
  userId: number; // pk
  username: string;
  password: string;
  userInfo: UserInfo;
}

export interface Item {
  id: number // pk
  owner: {
    userId: number
  },
  content: {
    title: string
    body: string
  }
}
