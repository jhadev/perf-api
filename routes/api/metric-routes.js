// import express router
const router = require('express').Router();
// import all controller functions
import {
  getAllMetrics,
  getOneMetric,
  createMetric,
  updateMetric,
  deleteMetric
} from '../../controllers/metrics-controller';
// will eventually be `/api/metrics`
router
  .route('/')
  .get(getAllMetrics)
  .post(createMetric);

// get a specific metric by id
// update metric by id
// delete metric by id

// `/api/metrics/:id`
router
  .route('/:id')
  .get(getOneMetric)
  .put(updateMetric)
  .delete(deleteMetric);

export default router;
