import { Op } from 'sequelize';
import handle from '../utils/promises';
// FIXME: cannot route from index?
import { Metric } from '../models';

const getAllMetrics = async (req, res) => {
  const [err, allData] = await handle(Metric.findAll({}));
  if (err) {
    console.log(err);
    return res.json(err);
  }

  res.json(allData);
};

const getOneMetric = async (req, res) => {
  const [err, oneMetric] = await handle(
    Metric.findOne({
      where: {
        id: req.params.id
      }
    })
  );

  if (err) {
    console.log(err);
    return res.json(err);
  }

  res.json(oneMetric);
};

const createMetric = async (req, res) => {
  const [err, newMetric] = await handle(Metric.create(req.body));
  if (err) {
    console.log(err);
    return res.json(err);
  }

  res.json(newMetric);
};

const updateMetric = async (req, res) => {
  const [err, updatedMetric] = await handle(
    Metric.update(req.body, {
      where: {
        id: req.params.id
      }
    })
  );
  if (err) {
    console.log(err);
    return res.json(err);
  }

  res.json(updatedMetric);
};

const deleteMetric = async (req, res) => {
  const [err, deletedMetric] = await handle(
    Metric.destroy({
      where: {
        id: req.params.id
      }
    })
  );
  if (err) {
    console.log(err);
    return res.json(err);
  }

  res.json(deletedMetric);
};

const findAllByYear = async (req, res) => {
  if (req.body.year.length !== 4 || req.body.year < 2000) {
    console.log('year must be 4 digits');
    return res.json({
      message: 'must input a valid year past the year 2000'
    });
  }
  const [err, metrics] = await handle(
    Metric.findAll({
      where: {
        date: {
          [Op.startsWith]: req.body.year
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

export {
  getAllMetrics,
  getOneMetric,
  createMetric,
  updateMetric,
  deleteMetric,
  findAllByYear
};
