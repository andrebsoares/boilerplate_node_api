import { DataTypes, Model } from "sequelize";
import { sequelize } from "../sequelize";
import { Tag } from "../../models/Tag";

export class SequelizeTag extends Model<Tag, Omit<Tag, 'id'>> {
  declare id: number;
  declare name: string;
  declare type: string;
}

SequelizeTag.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  sequelize,
  timestamps: false,
  tableName: 'tags'
})