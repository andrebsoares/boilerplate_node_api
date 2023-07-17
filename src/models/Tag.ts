
export enum TagType {
  hash = 'hash',
  category = 'category'
}

export function isValidTagType(type: any) {
  if (Object.values(TagType).includes(type as TagType))
    return true;
  return false;
}

export interface Tag {
  id?: number,
  name: string,
  type: TagType
}