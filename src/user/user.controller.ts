import { Controller, Get, Inject, Req, Res } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { ProxyService } from '../proxy';
import { ResponseDto, TYPES } from '../types';
import { UserDto } from './dtos/user.dto';

@ApiTags('/users')
@Controller('/users')
export class UserController {
  constructor(
    @Inject(ProxyService) private readonly proxyService: ProxyService,
  ) {}

  @Get()
  @ApiResponse({
    status: 200,
    type: [UserDto],
    description: 'Return the list of users',
  })
  async listAll(
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<ResponseDto> {
    return this.proxyService.send(
      req,
      res,
      TYPES.USER_SVC,
      'getUserByEmail',
      {},
    );
  }

  // @Post()
  // @ApiBody({
  //   type: CreateUserDto,
  // })
  // @ApiResponse({
  //   status: 200,
  //   type: [UserDto],
  //   description: 'Return the created user',
  // })
  // async create(
  //   @Body() createUserDto: CreateUserDto,
  // ): Promise<Observable<UserDto>> {
  //   return this.userService.createUser(createUserDto);
  // }
}
