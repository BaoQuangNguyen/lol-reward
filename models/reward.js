const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const rewardSchema = new mongoose.Schema({
  name: String,
  role: String,
  difficulty: String
})

module.exports = mongoose.model('Reward', rewardSchema);