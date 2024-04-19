import { Module } from '@nestjs/common';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AcreditacionesModule } from './acreditaciones/acreditaciones.module';
import { Controller } from './controllers/acreditacion/acreditaciones/.controller';

@Module({
  imports: [UsuariosModule, AcreditacionesModule],
  controllers: [Controller],
  providers: [],
})
export class AppModule {}
