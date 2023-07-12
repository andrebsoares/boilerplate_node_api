import dotenv from 'dotenv';
dotenv.config();

import { Options } from 'sequelize';

export const development: Options = {
  host: 'localhost',
  username: 'mysqluser',
  password: 'root',
  port: Number('3306'),
  database: 'poc_node_seq',
  dialect: 'mysql'
}