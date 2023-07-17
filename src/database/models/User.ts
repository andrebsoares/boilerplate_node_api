import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../sequelize';
import { Role, User } from '../../models/User';

export class SequelizeUser extends Model<User, Omit<User, 'id'>> {
  declare id: number;
  declare email: string;
  declare password: string;
  declare role: string;
}

SequelizeUser.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    values: Object.values(Role)
  }
}, {
  sequelize,
  timestamps: false,
  tableName: 'users'
})