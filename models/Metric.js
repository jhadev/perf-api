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

export default Metric;