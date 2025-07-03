import { Injectable } from "@nestjs/common";
import { IUserRepository } from "../../domain/interfaces/user-repository.interface";
import { CreateUserDto } from "../dtos/create-user.dto";
import { User } from "../../domain/entities/user";


/**
 * Caso de uso para registrar producto
 */
@Injectable()
export class CreateUserUseCase{
  // requerir como provider el ProductRepository
  constructor(private readonly userRepository: IUserRepository){}

  /**
   * Método para ejecutar el caso de uso
   * @param dto 
   * @returns Producto registrado o null
   */
  async execute(dto: CreateUserDto): Promise<User | null> {
    console.log(dto)
    // crear objeto de la entidad Product
    const userData = new User(
      '', // la generación del Id la implementará el repositorio
      dto.nombre,
      dto.apellido_paterno,
      dto.apellido_materno,
      dto.correo_electronico,
      dto.password,
      dto.activo
    );
    console.log(userData);

    // enviar a guardar el producto a través del repositorio de productos
    return this.userRepository.create(userData);
  }
}