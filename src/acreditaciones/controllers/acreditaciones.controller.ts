import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Acreditaciones')
@Controller('acreditaciones')
export class AcreditacionesController {

    @Get()
    @ApiOperation({summary: 'Devuelve una lista de todas las acreditaciones'})
    getAll(){
        return 'get all acreditacion';
    }

}
