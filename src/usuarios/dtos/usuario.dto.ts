import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty, OmitType } from '@nestjs/swagger';

export class UsuarioDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  nombres: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  apellidos: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty()
  email: string;
}

export class UpdateUsuarioDto extends OmitType(UsuarioDto, [
  'email',
] as const) {}

/*  
export class UpdateUsuarioDto {
    @IsString()
    @IsNotEmpty()
    readonly nombres?: string;
    @IsString()
    @IsNotEmpty()
    readonly apellidos?: string;
}   */
