import { Module } from '@nestjs/common';
import { UsuariosController } from './controller/usuarios.controller';
import { UsuariosService } from './services/usuarios.service';

@Module({
  imports: [],
  controllers: [UsuariosController],
  providers: [UsuariosService],
})
export class AppModule {}
