import { Module } from '@nestjs/common';
import { AcreditacionesController } from './controllers/acreditaciones.controller';
import { AcreditacionesService } from './services/acreditaciones/acreditaciones.service';

@Module({
  controllers: [AcreditacionesController],
  providers: [AcreditacionesService]
})
export class AcreditacionesModule {}
