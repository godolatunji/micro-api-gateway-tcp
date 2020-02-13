import * as joi from '@hapi/joi';
import * as dotenv from 'dotenv';

process.env.ENV_PATH
  ? dotenv.config({ path: process.env.ENV_PATH })
  : dotenv.config();

// validating environment variables
const schema = joi
  .object({
    PORT: joi.number().required(),
    NODE_ENV: joi
      .string()
      .valid('development', 'production', 'qa', 'staging')
      .required(),
    LOG_LEVEL: joi
      .string()
      .valid('error', 'warning', 'info', 'debug', 'silly')
      .default('silly'),

    // User Service
    USER_SVC: joi
      .string()
      .required(),

  })
  .unknown()
  .required();


const { error, value: envVars } = schema.validate(process.env);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

export const config = {
  isDevelopment: envVars.NODE_ENV === 'development' ? true : false,
  port: envVars.PORT,
  NODE_ENV: envVars.NODE_ENV,

  userSvc: envVars.USER_SVC,
};
