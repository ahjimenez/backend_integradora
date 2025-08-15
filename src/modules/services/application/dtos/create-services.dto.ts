import { IsNotEmpty, IsString } from "class-validator";

export class CreateServicesDto {
  @IsNotEmpty({ message: 'El codigo de servicio es obligatorio.' })
  @IsString({ message: 'El codigo de servicio debe ser una cadena de texto.' })
  service_code: string;

  @IsNotEmpty({ message: 'La descripcion del servicio es obligatorio.' })
  @IsString({ message: 'La descripcion del servicio debe ser una cadena de texto.' })
  service_description: string;

  }