import { ClientsModule, Transport } from '@nestjs/microservices';
import { config } from './config';
import { TYPES } from './types';

export const microservices = [
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
  ClientsModule.register([
    {
      name: TYPES.AUTHORIZATION_SVC,
      transport: Transport.TCP,
      options: {
        host: config.authorizationSvc.split(':')[0],
        port: Number.parseInt(config.authorizationSvc.split(':')[1], 10),
      },
    },
  ]),
];
