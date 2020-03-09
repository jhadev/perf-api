// import express router
const router = require('express').Router();
// import all controller functions
import * as crud from '../../controllers/metrics-crud';
import * as aggregate from '../../controllers/metrics-aggregation';
// will eventually be `/api/metrics`
router
  .route('/')
  .get(crud.getAllMetrics)
  .post(crud.createMetric);

// get a specific metric by id
// update metric by id
// delete metric by id

// `/api/metrics/:id`
router
  .route('/:id')
  .get(crud.getOneMetric)
  .put(crud.updateMetric)
  .delete(crud.deleteMetric);

router.route('/month/:month').get(aggregate.findAllByMonth);

router.route('/year/:year').get(aggregate.findAllByYear);

router.route('/date/:month/:year').get(aggregate.findByMonthAndYear);

// router.route('/year').post(findAllByYear);
// router.route('/month').post(findAllByMonth);

export default router;
