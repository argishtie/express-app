import { DataTypes, Model } from 'sequelize';

import db from '../clients/db.sequelize.js'

import Users from '../models/Users.js';

class Messages extends Model {
}

Messages.init({
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  message: {
    type: DataTypes.STRING,
  },
  from: {
    type: DataTypes.BIGINT,
  },
  to: {
    type: DataTypes.BIGINT,
  }
}, {
  sequelize: db,
  modelName: 'messages',
  tableName: 'messages',
  timestamps: true,
});


export default Messages;
