
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/core/databases/prisma.service";
import { User } from "../../domain/entities/user";
import { IUserRepository } from "../../domain/interfaces/user-repository.interface";
import { UserMapper } from "../mappers/user.mapper";

@Injectable()
export class PrismaUsersRepository implements IUserRepository {

    constructor(private readonly prismaService: PrismaService) { }

    async create(user: User): Promise<User | null> {

      const newUser = await this.prismaService.user.create({
            data: {
              ...user,
              id:undefined,
            }
        }); 
   
        return UserMapper.toDomain(newUser); 
    }
    /*  findByEmail(email: string): Promise<User | null> {
         throw new Error("Method not implemented.");
     }
     validateUser(email: string, password: string): Promise<User> {
         throw new Error("Method not implemented.");
     }
     generateToken(user: User): Promise<{ token: string; }> {
         throw new Error("Method not implemented.");
     } */

}