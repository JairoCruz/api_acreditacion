import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Incluir Pipe para validacion
  // al agregar whitelist, en el updateDto, y enviar un dato
  // para actualizar ya no lo permite.
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );


  // Documentation with Swagger
  const config = new DocumentBuilder()
    .setTitle('API Acreditaciones')
    .setDescription('Apis disponibles para las acreditaciones')
    .setVersion('1.0')
    .addTag('apis')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);


  await app.listen(3000);
}
bootstrap();
