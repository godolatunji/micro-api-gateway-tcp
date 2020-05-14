import { GraphQLModule } from '@nestjs/graphql';
import { config } from './config';

export const graphqlImports = [
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
];
