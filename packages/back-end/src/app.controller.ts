import { Controller, Get } from '@nestjs/common';
import { AppService, Resp } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): Resp {
    return this.appService.getHello();
  }
}
