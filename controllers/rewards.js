const Reward = require('../models/reward');

const express = require('express');
const router = express.Router();

function newReward(req, res) {
  res.render('rewards/new', { errorMsg: ''});
}








module.exports = {
  new: newReward
}
