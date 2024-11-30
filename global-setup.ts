import { PlaywrightTestConfig, request } from "@playwright/test";
import * as dotenv from 'dotenv';

async function globalSetup(config: PlaywrightTestConfig) {
  dotenv.config();
  const url = "https://restful-booker.herokuapp.com/auth";

  /**
   * Offical Documentation:
   * https://restful-booker.herokuapp.com/apidoc/index.html
   */

  const requestContext = await request.newContext();
  const response = await requestContext.post(`${url}`, {
    data: {
      username: `${process.env.USERNAME_ADMIN}`,
      password: `${process.env.USER_ADMIN_PASSWORD}`,
    },
  });

  const body = await response.json();
  process.env.TOKEN = body.token;
}

export default globalSetup;
