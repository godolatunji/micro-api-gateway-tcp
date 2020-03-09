import 'reflect-metadata';

import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as bodyParser from 'body-parser';
import * as rateLimit from 'express-rate-limit';
import * as helmet from 'helmet';
import { AppModule } from './app.module';
import { config } from './config';

async function bootstrap() {
  const application = await NestFactory.create(AppModule);
  application.useGlobalPipes(new ValidationPipe());
  application.use(bodyParser.json());

  const corsOption = {
    origin: [
      'https://api-prod.cars45.ng',
      'https://api-staging.cars45.ng',
      'http://localhost:50050',
    ],
    methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  };

  application.enableCors(corsOption);
  application.use(helmet());

  /**
   * application rate limiting
   * the configuration below limits requests to a thousand requests per IP every 10 minutes
   */
  application.use(
    rateLimit({
      windowMs: 10 * 60 * 1000, // 10 minutes
      max: 1000, // limit each IP to 1000 requests per windowMs
    }),
  );

  /**
   * Swagger documentation generation
   */
  const options = new DocumentBuilder()
    .setTitle('Cars45 API')
    .setDescription('API Documentation for *.cars45.ng')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(application, options);

  SwaggerModule.setup('docs', application, document);

  await application.listen(config.port);
  // await application.startAllMicroservicesAsync()
  Logger.log(`API gateway started on port ${config.port}`);
}
bootstrap();
