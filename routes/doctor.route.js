const doctorCtrl = require('../controllers/doctor.controller');
const authCtrl = require('../controllers/auth.controller');
const express = require ('express');
const router = express.Router();

router.route('/api/doctors')
    .get(doctorCtrl.getAllDoctors)
    .post(doctorCtrl.postDoctor)

router.route('/api/doctors/:doctorId')
    .get(doctorCtrl.read)
    .put(doctorCtrl.update)
    .delete(doctorCtrl.remove)
    // .get(doctorCtrl.getdoctorByID)
    // .put(doctorCtrl.updatedoctor)
    // .delete(doctorCtrl.deletedoctor)


// router.route('/doctors/:doctorId')
//     .get(authCtrl.requireSignin, doctorCtrl.read)
//     .put(authCtrl.requireSignin, authCtrl.hasAuthorization, doctorCtrl.update)
//     // .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, doctorCtrl.remove)
  
router.param('doctorId', doctorCtrl.doctorByID)

module.exports = router;