import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import { UserService } from './services/user.service';
import { UserController } from './user.controller';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public/test9')
    })
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService]
})
export class AppModule {}

type Test = 'FAILED' | 'SUCCESS';

const enum Tesst1 {
  FAILED,
  SUCCESS
}

type M = Map<Date, string>;
