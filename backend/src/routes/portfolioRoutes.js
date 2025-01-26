const express = require('express');
const { addWork, getAllWorks } = require('../controllers/portfolioController');
const router = express.Router();

router.post('/work', addWork);
router.get('/works', getAllWorks);

module.exports = router;
