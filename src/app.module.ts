import { Module } from '@nestjs/common';
import {
  Client,
  ClientProxy,
  ClientsModule,
  ClientTCP,
  Transport,
} from '@nestjs/microservices';
import { config } from './config';
import { TYPES } from './types';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: TYPES.USER_SVC,
        transport: Transport.TCP,
        options: {
          host: config.userSvc.split(':')[0],
          port: Number.parseInt(config.userSvc.split(':')[1], 10),
        },
      },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {
  // @Client({ transport: Transport.TCP })
  // private client: ClientTCP;
  // async onApplicationBootstrap() {
  //   await this.client.connect();
  // }
}
