import { IsNotEmpty, IsNumber, IsString, Min } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty({ message: 'El nombre es obligatorio.' })
    @IsString({ message: 'El nombre debe ser una cadena de texto.' })
    nombre: string;

    @IsNotEmpty({ message: 'El sku es obligatorio.' })
    @IsString({ message: 'El sku debe ser una cadena de texto.' })
    apellido_paterno: string;

    @IsNotEmpty({ message: 'La descripción es obligatoria.' })
    @IsString({ message: 'El apellido paterno es obligatorio.' })
    apellido_materno: string;

    @IsNotEmpty()
    @IsString({ message: "El correo electronico es obligatorio." })
    correo_electronico: string;

    @IsNotEmpty()
    @IsString({ message: "El password es obligatorio." })
    password: string;

    @IsNotEmpty()
    @IsString({ message: "El campo activo es obligatorio" })
    activo: string;
}
