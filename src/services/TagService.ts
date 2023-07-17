
import { ValidationError } from "../errors/ValidationError";
import { Tag, TagType, isValidTagType } from "../models/Tag";
import { ICreateTagRepository } from "../repositories/TagRepository";

export class CreateTagService {
  constructor(
    private repository: ICreateTagRepository
  ) { }

  async create(name: string, type: string) {
    if (!isValidTagType(type)) {
      throw new ValidationError('INVALID_TAG_TYPE')
    }

    const tag: Tag = {
      name,
      type: type as TagType
    }

    const { id } = await this.repository.create(tag);

    return { id }
  }
}