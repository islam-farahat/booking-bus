import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  let port = process.env.PORT;
  if (port == null || port == '') {
    port = '8080';
  }

  await app.listen(Number(port));
}
bootstrap();
