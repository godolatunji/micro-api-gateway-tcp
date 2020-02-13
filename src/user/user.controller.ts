import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiResponse, ApiBody, ApiTags } from '@nestjs/swagger';
import { UserDto } from '../dtos/user.dto';
import { Observable } from 'rxjs';
import { CreateUserDto } from '../dtos/create-user.dto';

@ApiTags('/users')
@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiResponse({
    status: 200,
    type: [UserDto],
    description: 'Return the list of users',
  })
  async listAll(): Promise<Observable<UserDto[]>> {
    return this.userService.allUsers();
  }

  @Post()
  @ApiBody({
    type: CreateUserDto,
  })
  @ApiResponse({
    status: 200,
    type: [UserDto],
    description: 'Return the created user',
  })
  async create(@Body() createUserDto: CreateUserDto): Promise<Observable<UserDto>> {
    return this.userService.createUser(createUserDto);
  }

}
