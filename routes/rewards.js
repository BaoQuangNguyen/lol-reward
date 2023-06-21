var express = require('express');
var router = express.Router();

const rewardCtrl = require('../controllers/rewards');
const reward = require('../models/reward');

router.get('/all', rewardCtrl.index);
router.get('/new', rewardCtrl.new);
router.get('/:id', rewardCtrl.show);
router.get('/:id/edit', rewardCtrl.edit);

router.put('/:id', rewardCtrl.update);
router.post('/', rewardCtrl.create);
router.delete('/:id', rewardCtrl.delete);

module.exports = router;
