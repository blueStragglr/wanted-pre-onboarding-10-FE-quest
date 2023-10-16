import { Injectable } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { User } from "../types/user";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService
  ) {}

  async validateUser(username: string, pass: string): Promise<Omit<User, 'password'>> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...userInfo } = user
      return userInfo;
    }
    return null;
  }
}
