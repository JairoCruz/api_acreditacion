import { Module } from '@nestjs/common';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AcreditacionesModule } from './acreditaciones/acreditaciones.module';

@Module({
  imports: [UsuariosModule, AcreditacionesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
