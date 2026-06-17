import { DataTypes, Model } from 'sequelize';
import md5 from 'md5';

import db from '../clients/db.sequelize.js'

class Users extends Model {
  static async createDefaults() {
  }

  static hashPassword(password) {
    return md5(md5(password) + 'hello1');
  }
}

Users.init({
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    // allowNull: false,
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  age: {
    type: DataTypes.BIGINT,
  },
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.STRING,
    default: 'pending',
  },
  activationToken: {
    type: DataTypes.STRING,
  },
}, {
  // Other model options go here
  sequelize: db, // We need to pass the connection instance
  modelName: 'users', // We need to choose the model name
  tableName: 'users',
  timestamps: true,
});

export default Users;
