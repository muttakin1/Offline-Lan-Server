const authCtrl = require('../controllers/auth.controller');
const express = require('express');
const router = express.Router();

router.route('/auth/signin')
    .post(authCtrl.signin)

router.route('/auth/signout')
    .get(authCtrl.signout)

module.exports = router;