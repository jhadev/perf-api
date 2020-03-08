// import router
const router = require('express').Router();

// import api route files
import metricRoutes from './metric-routes';

// set up and prepend api routes from imported files
router.use('/metrics', metricRoutes);

// export packaged routes
export default router;
