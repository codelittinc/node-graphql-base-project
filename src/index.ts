import { applyConfig } from './config';
import { getApp } from './server';

export async function start() {
  console.log(
    `Starting server in mode: ${process.env.NODE_ENV || 'development'}`
  );

  await applyConfig();

  const app = getApp();

  const { SERVER_PORT } = process.env;

  const PORT = SERVER_PORT || 9090;

  app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
  });
}
