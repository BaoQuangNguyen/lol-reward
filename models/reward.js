const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const rewardSchema = new mongoose.Schema({
  name: String,
  role: { 
    type: String,
    enum: ['Top', 'Jungle', 'Mid', 'ADC', 'Support']
   },
  difficulty: {
    type: String,
    enum: ['Easy', 'Intermediate', 'Advanced']
}, })

module.exports = mongoose.model('Reward', rewardSchema);