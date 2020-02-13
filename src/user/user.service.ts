import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UserDto } from '../dtos/user.dto';
import { TYPES } from '../types';

@Injectable()
export class UserService {
  constructor(@Inject(TYPES.USER_SVC) private readonly userSvc: ClientProxy) {}

  allUsers(): Observable<UserDto[]> {
    const pattern = { cmd: 'find' };
    const response = this.userSvc.send<UserDto[]>(pattern, {});
    return response.pipe(map((msg: UserDto[]) => msg));
  }

  createUser(data: CreateUserDto): Observable<UserDto> {
    const pattern = { cmd: 'create' };
    return this.userSvc
      .send<UserDto>(pattern, data)
      .pipe(map((msg: UserDto) => msg));
  }
}
