import { IsNotEmpty, IsString, IsUrl } from "class-validator";

export class AcreditacionDto {
    
    @IsString()
    @IsNotEmpty()
    nombres: string;

    @IsString()
    @IsNotEmpty()
    apellidos: string;

    @IsNotEmpty()
    @IsUrl()
    foto: string;
}