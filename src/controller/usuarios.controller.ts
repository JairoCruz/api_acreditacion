import {
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Param,
  Body,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { UsuarioDto, UpdateUsuarioDto } from 'src/dtos/usuario.dto';
import { UsuariosService } from 'src/services/usuarios.service';

@Controller('usuarios')
export class UsuariosController {
  constructor(private usuariosService: UsuariosService) {}

  // Method GET

  @Get()
  findAll(@Query('limit') limit = 5) {
    return this.usuariosService.findAll();
  }

  // Method POST

  @Post()
  create(@Body() createUsuarioDto: UsuarioDto) {
    return this.usuariosService.create(createUsuarioDto);
  }

  // Method UPDATE

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUsuarioDto: UpdateUsuarioDto,
  ) {
    return this.usuariosService.update(id, updateUsuarioDto);
  }

  // Method DELETE

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.usuariosService.remove(id);
  }

  // Method GET one by Id

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number) {
    return this.usuariosService.findOne(id);
  }
}
