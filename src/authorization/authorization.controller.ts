import {
  Controller,
  Delete,
  Get,
  Inject,
  Post,
  Put,
  Req,
  Res,
} from '@nestjs/common';
import { ApiBody, ApiHeader, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { ProxyService } from '../proxy';
import { ResponseDto, TYPES } from '../types';
import { RoleDto } from '../user/dtos/role.dto';
import { UserResponseDto } from '../user/dtos/user-response.dto';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { CreateRoleDto } from './dto/create-role.dto';
import { LoginDto } from './dto/login.dto';

@ApiTags('/auth')
@ApiHeader({
  name: 'Authorization',
  description: 'Bearer <token>',
})
@Controller('/auth')
export class AuthorizationController {
  constructor(
    @Inject(ProxyService) private readonly proxyService: ProxyService,
  ) {}

  @Post('/login')
  @ApiBody({ type: LoginDto })
  @ApiResponse({
    status: 200,
    type: UserResponseDto,
    description: 'returns a user object with roles and permission',
  })
  async login(
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<UserResponseDto> {
    return this.proxyService.send(
      req,
      res,
      TYPES.AUTHORIZATION_SVC,
      'login',
      req.body,
    );
  }

  @Post('/permission')
  @ApiBody({ type: CreatePermissionDto })
  @ApiResponse({
    status: 200,
    type: CreatePermissionDto,
    description: 'returns a permission object',
  })
  async createPermission(
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<ResponseDto> {
    return this.proxyService.send(
      req,
      res,
      TYPES.AUTHORIZATION_SVC,
      'createPermission',
      req.body,
    );
  }

  @Get('/permission')
  @ApiResponse({
    status: 200,
    type: [CreatePermissionDto],
    description: 'returns a list of permission objects',
  })
  async listPermissions(
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<ResponseDto> {
    return this.proxyService.send(
      req,
      res,
      TYPES.AUTHORIZATION_SVC,
      'listPermissions',
      req.body,
    );
  }

  @Put('/permission/:id')
  @ApiResponse({
    status: 200,
    type: CreatePermissionDto,
    description: 'returns a permission object',
  })
  async updatePermission(
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<ResponseDto> {
    const data = { id: req.params.id, ...req.body };
    return this.proxyService.send(
      req,
      res,
      TYPES.AUTHORIZATION_SVC,
      'updatePermissions',
      data,
    );
  }

  @Delete('/permission/:id')
  @ApiResponse({
    status: 200,
    type: Boolean,
    description: 'returns a boolean status to confirm deletion',
  })
  async deletePermission(
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<ResponseDto> {
    return this.proxyService.send(
      req,
      res,
      TYPES.AUTHORIZATION_SVC,
      'listPermissions',
      { id: req.params.id },
    );
  }

  @Get('/role')
  @ApiResponse({
    status: 200,
    type: [RoleDto],
    description: 'returns a list of role objects',
  })
  async listRoles(
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<ResponseDto> {
    return this.proxyService.send(
      req,
      res,
      TYPES.AUTHORIZATION_SVC,
      'listRoles',
      req.body,
    );
  }

  @Post('/role')
  @ApiBody({ type: CreateRoleDto })
  @ApiResponse({
    status: 200,
    type: [RoleDto],
    description: 'returns a role object',
  })
  async createRole(
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<ResponseDto> {
    return this.proxyService.send(
      req,
      res,
      TYPES.AUTHORIZATION_SVC,
      'createRole',
      req.body,
    );
  }

  @Put('/role/:id')
  @ApiBody({ type: CreateRoleDto })
  @ApiResponse({
    status: 200,
    type: [RoleDto],
    description: 'returns a role object',
  })
  async updateRole(
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<ResponseDto> {
    const data = { id: req.params.id, name: req.body.name };
    return this.proxyService.send(
      req,
      res,
      TYPES.AUTHORIZATION_SVC,
      'createRole',
      data,
    );
  }

  @Delete('/role/:id')
  @ApiResponse({
    status: 200,
    type: Boolean,
    description: 'returns a boolean status to confirm deletion',
  })
  async deleteRole(
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<ResponseDto> {
    return this.proxyService.send(
      req,
      res,
      TYPES.AUTHORIZATION_SVC,
      'deleteRole',
      { id: req.params.id },
    );
  }

  @Put('/role/:id/updatePermissions')
  @ApiBody({ type: CreateRoleDto })
  @ApiResponse({
    status: 200,
    type: [RoleDto],
    description: 'returns a role object',
  })
  async updatePermissions(
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<ResponseDto> {
    const data = { id: req.params.id, permissionIds: req.body.permissionIds };
    return this.proxyService.send(
      req,
      res,
      TYPES.AUTHORIZATION_SVC,
      'updatePermissions',
      data,
    );
  }
}
