import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { config } from './config';
import { InventoryController } from './inventory/inventory.controller';
import { InventoryService } from './inventory/inventory.service';
import { GraphQLMiddleware } from './middlewares/graphql-middleware';
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
    GraphQLModule.forRoot({
      debug: config.isDevelopment,
      playground: true,
      path: '/car/graphql',
      typePaths: ['./**/car.graphql'],
      context: ({ req }) => ({ req }),
    }),
    GraphQLModule.forRoot({
      debug: config.isDevelopment,
      playground: true,
      path: '/auction/graphql',
      typePaths: ['./**/auction.graphql'],
      context: ({ req }) => ({ req }),
    }),
    GraphQLModule.forRoot({
      debug: config.isDevelopment,
      playground: true,
      path: '/inspection/graphql',
      typePaths: ['./**/inspection.graphql'],
      context: ({ req }) => ({ req }),
    }),
    GraphQLModule.forRoot({
      debug: config.isDevelopment,
      playground: true,
      path: '/search/graphql',
      typePaths: ['./**/search.graphql'],
      context: ({ req }) => ({ req }),
    }),
    GraphQLModule.forRoot({
      debug: config.isDevelopment,
      playground: true,
      path: '/document/graphql',
      typePaths: ['./**/document.graphql'],
      context: ({ req }) => ({ req }),
    }),
    GraphQLModule.forRoot({
      debug: config.isDevelopment,
      playground: true,
      path: '/cardata/graphql',
      typePaths: ['./**/cardata.graphql'],
      context: ({ req }) => ({ req }),
    }),
  ],
  controllers: [UserController, InventoryController],
  providers: [UserService, InventoryService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(GraphQLMiddleware)
      .forRoutes(
        { path: 'car/graphql', method: RequestMethod.POST },
        { path: 'auction/graphql', method: RequestMethod.POST },
        { path: 'inspection/graphql', method: RequestMethod.POST },
        { path: 'search/graphql', method: RequestMethod.POST },
        { path: 'document/graphql', method: RequestMethod.POST },
        { path: 'cardata/graphql', method: RequestMethod.POST },
      );
  }
}
