import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { TYPES } from '../types';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserDto } from './dtos/user.dto';

@Injectable()
export class UserService {
  constructor(@Inject(TYPES.USER_SVC) private readonly userSvc: ClientProxy) {}

  allUsers(): Observable<UserDto[]> {
    const pattern = { cmd: 'find' };
    return this.userSvc.send<UserDto[]>(pattern, {});
  }

  createUser(data: CreateUserDto): Observable<UserDto> {
    const pattern = { cmd: 'create' };
    return this.userSvc.send<UserDto>(pattern, data);
  }
}
