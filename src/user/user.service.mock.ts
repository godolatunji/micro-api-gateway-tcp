import { UserDto } from './dtos/user.dto';

export class UserServiceMock {
  allUsers(): UserDto[] {
    const users: UserDto[] = [
      {
        id: 1,
        name: 'name',
      },
      {
        id: 2,
        name: 'name',
      },
    ];
    return users;
  }

  createUser(): UserDto {
    const user: UserDto = {
      id: 1,
      name: 'name',
    };
    return user;
  }
}
