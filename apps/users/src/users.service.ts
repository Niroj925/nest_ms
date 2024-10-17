import { Injectable } from '@nestjs/common';
import { userDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  private users: userDto[] = [
    {
      id: '09ihetjbg',
      name: 'thapa',
      age: 35,
    },
    {
      id: '09ihetjbg',
      name: 'kaji',
      age: 25,
    },
  ];

  
  findAll(){
    return this.users;
  }
  getHello(): string {
    return 'Hello World!';
  }
}
