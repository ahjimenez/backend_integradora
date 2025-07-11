import { IsString, IsNotEmpty } from "class-validator";

export class CreateRoleDto {
    @IsString({ message: "El rol debe ser una cadena de texto" })
    @IsNotEmpty({ message: "El rol no puede estar vacío" })
    role: string;
    
}