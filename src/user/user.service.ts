import { Injectable, Inject } from '@nestjs/common';
import { UserDto } from '../dtos/user.dto';
import { TYPES } from '../types';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { CreateUserDto } from '../dtos/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject(TYPES.USER_SVC) private readonly userSvc: ClientProxy,
  ){}

  allUsers(): Observable<UserDto[]> {
    const pattern = { cmd: 'userSvc::find' };
    return this.userSvc.send<UserDto[]>(pattern, {});
  }

  createUser(data: CreateUserDto): Observable<UserDto> {
    const pattern = { cmd: 'userSvc::create' };
    return this.userSvc.send<UserDto>(data, pattern);
  }
}
