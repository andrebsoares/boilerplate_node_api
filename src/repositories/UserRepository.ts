import { SequelizeUser } from "../database/models/User";
import { User } from "../models/User";

export interface IUserRepository {
  create(user: User): Promise<{ id: number }>
}

export class UserRepository implements IUserRepository {
  create = async (user: User): Promise<{ id: number; }> => {
    const created = await SequelizeUser.create({
      email: user.email,
      password: user.password,
      role: user.role
    });

    return {
      id: created.id
    }
  }
}