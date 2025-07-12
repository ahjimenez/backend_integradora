import { Injectable } from "@nestjs/common";
import { Properties } from "src/properties/domain/entities/properties";
import { IPropertiesRepository } from "src/properties/domain/interfaces/properties-repository.interface";

@Injectable()
export class GetPropertiesUseCase {
  constructor(private readonly propertiesRepository: IPropertiesRepository) {}

  async execute(): Promise<Properties[]> {
    return this.propertiesRepository.getAll();
  }
}   