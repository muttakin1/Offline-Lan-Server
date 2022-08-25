const reportCtrl = require('../controllers/report.controller');
const authCtrl = require('../controllers/auth.controller')
const express = require('express')
const router = express.Router();

router.route('/api/report')
    .get(reportCtrl.getReports)
    .post(reportCtrl.createReport)

module.exports = router;