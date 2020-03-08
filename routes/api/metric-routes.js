// import express router
const router = require('express').Router();
// import models
import { Metric } from '../../models';

// will eventually be `/api/metrics`
router.get('/', (req, res) => {
  Metric.findAll({})
    .then(metricData => res.json(metricData))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

// get a specific metric by id
router.get('/:id', (req, res) => {
  Metric.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(metricData => res.json(metricData))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

// create a new metric
router.post('/', (req, res) => {
  Metric.create(req.body)
    .then(metricData => res.json(metricData))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

// update metric by id
router.put('/:id', (req, res) => {
  Metric.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(metricData => res.json(metricData))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

// delete metric by id
router.delete('/:id', (req, res) => {
  Metric.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(metricData => res.json(metricData))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

export default router;
