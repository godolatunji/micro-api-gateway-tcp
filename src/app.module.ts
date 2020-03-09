import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { config } from './config';
import { InventoryController } from './inventory/inventory.controller';
import { InventoryService } from './inventory/inventory.service';
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
    ClientsModule.register([
      {
        name: TYPES.INVENTORY_SVC,
        transport: Transport.TCP,
        options: {
          host: config.inventorySvc.split(':')[0],
          port: Number.parseInt(config.inventorySvc.split(':')[1], 10),
        },
      },
    ]),
  ],
  controllers: [UserController, InventoryController],
  providers: [UserService, InventoryService],
})
export class AppModule {}
