import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection';

class Metric extends Model {}

// define table data here
Metric.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date: {
      // YYYY-MM-DD HH:MI:SS
      type: DataTypes.DATE,
      allowNull: false
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        len: [1]
      }
    }
  },
  {
    sequelize
  }
);

export { Metric };
