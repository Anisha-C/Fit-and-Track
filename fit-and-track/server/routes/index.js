const router = require('express').Router();

const apiRoutes = require('./api');

//need some directory for this HTML routes
const htmlRoutes = require('');

router.use('/api', apiRoutes);
router.use('/', htmlRoutes);

router.use((req, res) => {
    res.status(400).send('<h1>404 Error!</h1>');
});

module.exports = router;