import { SequelizeTag } from "../database/models/Tag";
import { Tag } from "../models/Tag";

export interface ICreateTagRepository {
    create(tag: Tag): Promise<{ id: number }>
  }

export class TagRepository implements ICreateTagRepository {
  async create(tag: Tag): Promise<{ id: number; }> {
    const created = await SequelizeTag.create({
      name: tag.name,
      type: tag.type
    })

    return {
      id: created.id
    };
  }
}