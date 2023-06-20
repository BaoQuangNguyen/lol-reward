var express = require('express');
var router = express.Router();

const rewardCtrl = require('../controllers/rewards');
const reward = require('../models/reward');

router.get('/', rewardCtrl.index)
router.get('/new', rewardCtrl.new);
router.post('/', rewardCtrl.create);
router.get('/:id', rewardCtrl.show)


module.exports = router;
