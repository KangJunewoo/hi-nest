import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true, // parseInt 이제 안써도 됨.
    }),
  ); // input의 유효성 검사를 위해 추가한 코드.
  await app.listen(3000);
}
bootstrap();
