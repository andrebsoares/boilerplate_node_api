import { UserRepository } from "../repositories/UserRepository";
import { UserService } from "../services/UserService";
import { CreateUserController } from "../controller/UserController";

export class CreateUserControllerFactory {
  static make() {
    // const repository = new InMemoryCreateUserRepository();
    const repository = new UserRepository();
    const service = new UserService(repository);
    const controller = new CreateUserController(service);

    return controller;
  }
}