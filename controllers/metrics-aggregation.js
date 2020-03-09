import { Op } from 'sequelize';
import handle from '../utils/promises';
import { Metric } from '../models';

// FIXME: keep it dry yo
const findAllByYear = async (req, res) => {
  if (req.params.year.length !== 4 || req.params.year < 2000) {
    console.log('year must be 4 digits');
    return res.json({
      message: 'must input a valid year past the year 2000'
    });
  }
  const [err, metrics] = await handle(
    Metric.findAll({
      where: {
        date: {
          [Op.startsWith]: req.params.year
        }
      }
    })
  );

  if (err) {
    console.log(err);
    return res.json(err);
  }

  res.json(metrics);
};

const findAllByMonth = async (req, res) => {
  if (req.params.month.length === 1) {
    req.params.month = `0${req.params.month}`;
  }

  const [err, metrics] = await handle(
    Metric.findAll({
      where: {
        date: {
          [Op.substring]: `${req.params.month}-`
        }
      }
    })
  );

  if (err) {
    console.log(err);
    return res.json(err);
  }

  res.json(metrics);
};

const findByMonthAndYear = async (req, res) => {
  if (req.params.month.length === 1) {
    req.params.month = `0${req.params.month}`;
  }

  if (req.params.year.length !== 4 || req.params.year < 2000) {
    console.log('year must be 4 digits');
    return res.json({
      message: 'must input a valid year past the year 2000'
    });
  }

  const [err, metrics] = await handle(
    Metric.findAll({
      where: {
        date: {
          [Op.and]: {
            [Op.substring]: `${req.params.month}-`,
            [Op.startsWith]: req.params.year
          }
        }
      }
    })
  );

  if (err) {
    console.log(err);
    return res.json(err);
  }

  res.json(metrics);
};

export { findAllByMonth, findAllByYear, findByMonthAndYear };
