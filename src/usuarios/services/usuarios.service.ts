import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateUsuarioDto, UsuarioDto } from 'src/usuarios/dtos/usuario.dto';

export class Usuario {
  id: number;
  nombres: string;
  apellidos: string;
  email: string;
}

@Injectable()
export class UsuariosService {
  private usuarioId = 1;
  private readonly usuarios: Usuario[] = [];

  create(usuario: UsuarioDto) {
    this.usuarioId = this.usuarioId + 1;
    const newUsuario = {
      id: this.usuarioId,
      ...usuario,
    };

    this.usuarios.push(newUsuario);
    return newUsuario;
  }

  findAll() {
    return this.usuarios;
  }

  findOne(id: number) {
    const usuario = this.usuarios.find((usuario) => usuario.id === id);
    if (!usuario) {
      throw new NotFoundException(`Usuario #${id} no encontrado`);
    }
    return usuario;
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    console.log(updateUsuarioDto);
    const usuario = this.findOne(id);
    const index = this.usuarios.findIndex((usuario) => usuario.id === id);
    this.usuarios[index] = {
      ...usuario,
      ...updateUsuarioDto,
    };
    return this.usuarios[index];
  }

  remove(id: number) {
    const index = this.usuarios.findIndex((usuario) => usuario.id === id);
    if (index === -1) {
      throw new NotFoundException(`Usuario #${id} no encontrado`);
    }
    this.usuarios.splice(index, 1);
    return true;
  }
}
