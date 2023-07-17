import dotenv from 'dotenv';
dotenv.config();

import { Options } from 'sequelize';

export const development: Options = {
//   host: 'localhost',
//   username: 'user_root',
//   password: 'root',
//   port: Number('3306'),
//   database: 'boilerplate_node',
//   dialect: 'mysql'
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
  dialect: 'mysql'
}