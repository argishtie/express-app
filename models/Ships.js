import { DataTypes, Model } from 'sequelize';

import db from '../clients/db.sequelize.js'

class Ships extends Model {
}

Ships.init({
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
}, {
  sequelize: db,
  modelName: 'ships',
  tableName: 'ships',
  timestamps: true,
});

export default Ships;
