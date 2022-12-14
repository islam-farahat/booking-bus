import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  let port = process.env.PORT;
  if (port == null || port == '') {
    port = '3000'; //port number
  }
  app.enableCors();
  await app.listen(Number(port), '0.0.0.0');
}
bootstrap();
