import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { ClientsModule, Transport, ClientProxy, Client } from '@nestjs/microservices';
import { TYPES } from './types';
import { config } from './config';

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
  @Client({ transport: Transport.TCP })
  private client: ClientProxy;

  async onApplicationBootstrap() {
    await this.client.connect();
  }
}
