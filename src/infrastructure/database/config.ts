import dotenv from 'dotenv';
dotenv.config();

import { Options } from 'sequelize';

export const development: Options = {
  host: 'localhost',
  username: 'user_root',
  password: 'root',
  port: Number('3306'),
  database: 'boilerplate_node',
  dialect: 'mysql'
}