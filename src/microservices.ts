import { Transport } from '@nestjs/microservices';
import { config } from './config';
import { TYPES } from './types';

const USER_SVC = {
    name: TYPES.USER_SVC,
    transport: Transport.TCP as Transport,
    options: {
        host: config.userSvc.split(':')[0],
        port: Number.parseInt(config.userSvc.split(':')[1], 10),
    },
};

export const microservices = [
    USER_SVC,
];
