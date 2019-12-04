import { Injectable } from '@nestjs/common';
import { User } from '../models/user.model';

@Injectable()
export class UserService {
  save(user: User): User {
    return {
      bod: new Date().toISOString(),
      name: 'Johnson',
      password: 'abd',
      ...user
    };
  }
}
