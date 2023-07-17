export enum Role {
  author = 'author',
  admin = 'admin'
}

export function isValidRole(type: any) {
  if (Object.values(Role).includes(type as Role))
    return true;
  return false;
}

export interface User {
  id?: number;
  email: string;
  password: string;
  role: Role;
}