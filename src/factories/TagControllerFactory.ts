import { TagRepository } from "../repositories/TagRepository";
import { CreateTagService } from "../services/TagService";
import { CreateTagController } from "../controller/TagController";


export class CreateTagControllerFactory {
  static make() {
    const repository = new TagRepository();
    const service = new CreateTagService(repository);
    const controller = new CreateTagController(service);

    return controller;
  }
}