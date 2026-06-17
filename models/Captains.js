import { DataTypes, Model } from 'sequelize';

import db from '../clients/db.sequelize.js'

class Captains extends Model {
}

Captains.init({
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
  modelName: 'captains',
  tableName: 'captains',
  timestamps: true,
});

export default Captains;
