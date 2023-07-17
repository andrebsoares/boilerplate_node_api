// - Validar dados do usuário [x]
// - Salvar os dados no banco [x]
// - Retornar id do usuário criado [x]

import { ValidationError } from "../errors/ValidationError";
import { Role, User, isValidRole } from "../models/User";
import { IUserRepository } from "../repositories/UserRepository";

export interface IUserService {
  create(email: string, password: string, role: string): Promise<{ id: number }>
}

export class UserService {
  constructor(
    private repository: IUserRepository
  ) { }

  create = async (email: string, password: string, role: string) => {
    if (!isValidRole(role)) {
      throw new ValidationError('INVALID_ROLE');
    }

    const user: User = {
      email,
      password,
      role: role as Role
    }
    const { id } = await this.repository.create(user);

    return { id }
  }
}