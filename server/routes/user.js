const express = require('express');

const router = express.Router();

//middlewares
const { authCheckProfile } = require('../middlewares/auth');


//controllers
const { create } = require('../controllers/user');



router.get('/user', (req, res) =>{
  res.json({
    data:'hey you hit user API endpoint ',
  });
});

router.post('/createProfile', authCheckProfile , create);
// router.get('/getProfile' , authCheckProfile, viewProfile);

module.exports = router;
