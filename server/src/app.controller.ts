import { Controller, Get, HttpException, Post, Request, UseGuards } from '@nestjs/common'
import { AppService } from "./app.service";
import { LocalAuthGuard } from "./auth/local-auth.guard";
import { AuthenticatedGuard } from "./auth/authenticated.guard";
import { UsersService } from './users/users.service'

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private usersService: UsersService
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(LocalAuthGuard)
  @Post("/auth/login")
  async login(@Request() req) {
    return {
      result: 'success',
      message: '로그인 성공'
    }
  }

  @UseGuards(AuthenticatedGuard)
  @Get("/profile")
  getLoggedIn(@Request() req) {
    return req.user;
  }

  @UseGuards(AuthenticatedGuard)
  @Post("/logout")
  getProfile(@Request() req) {
    req.session.destroy()
    return {
      message: '정상적으로 로그아웃되었습니다.'
    };
  }

  @UseGuards(AuthenticatedGuard)
  @Get('/items')
  getUsersItems(@Request() req) {
    return this.usersService.getUserItems(req.user);
  }

  @UseGuards(AuthenticatedGuard)
  @Get('/all-items')
  async getAllItems(@Request() req) {
    // 실제로는 좀 더 재활용 가능한 형태로 엄격하게 구현됩니다.
    console.log('reqUser:', req.user)
    const currentUser = await this.usersService.findOne(req.user)
    console.log(currentUser)
    if (!req.user.userInfo.roles.includes('admin')) throw new HttpException('권한이 없습니다.', 403);
    return this.usersService.getAllItems();
  }

}

