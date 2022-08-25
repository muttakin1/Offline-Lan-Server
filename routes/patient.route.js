const patientCtrl = require('../controllers/patient.controller');
const authCtrl = require('../controllers/auth.controller')
const express = require('express')
const router = express.Router();

router.route('/api/patient')
    .get(patientCtrl.getAllPatient)
    .post(patientCtrl.postPatient)
// .put(patientCtrl.updatePatient)
// .delete(patientCtrl.deletePatient)

router.route('/api/patient/search')
    .post(patientCtrl.getPatientByDetails)

router.route('/api/patient/:patientId')
    .get(patientCtrl.getPatientById)
    .put(patientCtrl.updatePatient)
    .delete(patientCtrl.deletePatient)

module.exports = router;