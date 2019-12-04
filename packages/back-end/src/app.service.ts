import { Injectable } from '@nestjs/common';

export type Resp = {
  name: string;
  test: number;
};

@Injectable()
export class AppService {
  getHello(): Resp {
    throw new Error('Ts mande!');
    const now = Date.now();
    console.log(now);

    return {
      name: 'Ange',
      test: now
    };
  }
}
