const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("Invalid route. Please read API documentation for route information.")
});

module.exports = router;