import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AuthorizationController } from './authorization/authorization.controller';
import { AuthorizationService } from './authorization/authorization.service';
import { CacheModule } from './cache/cache.module';
import { graphqlImports } from './graphql.import';
import { InventoryController } from './inventory/inventory.controller';
import { microservices } from './microservices.import';
import { AuthMiddleware } from './middlewares/auth.middleware';
import { GraphQLMiddleware } from './middlewares/graphql-middleware';
import { ProxyService } from './proxy';
import { UserController } from './user/user.controller';

@Module({
  imports: [...microservices, ...graphqlImports, CacheModule],
  controllers: [UserController, InventoryController, AuthorizationController],
  providers: [AuthorizationService, ProxyService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });

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
