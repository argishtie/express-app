import { DataTypes, Model } from 'sequelize';

import db from '../clients/db.sequelize.js'

import Ships from "./Ships.js";
import Captains from "./Captains.js";

class CaptainShips extends Model {
}

CaptainShips.init({
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
}, {
  sequelize: db,
  modelName: 'captainShips',
  tableName: 'captain_ships',
  timestamps: true,
});

Captains.belongsToMany(Ships, {
  through: CaptainShips,
  as: 'ships',
});
Ships.belongsToMany(Captains, {
  through: CaptainShips,
  as: 'captains',
});

export default CaptainShips;
