import { Controller, Post, Body } from '@nestjs/common';
import { User } from './models/user.model';
import { UserService } from './services/user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('user')
  save(@Body() user: User): User {
    return this.userService.save(user);
  }
}
