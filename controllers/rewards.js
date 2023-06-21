const reward = require('../models/reward');
const Reward = require('../models/reward');

const express = require('express');
const router = express.Router();

function newReward(req, res) {
  res.render('rewards/new', { errorMsg: ''});
}

async function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  try {
    await Reward.create(req.body);
    res.redirect('/rewards/all');
  }
  catch (err) {
    res.render('rewards/new', { errorMsg: err.message });
  }
}

async function index(req, res) {
  try {
      const rewardsAll = await Reward.find({});
      res.render('rewards/index', {rewards: rewardsAll });
  } catch (error) {
      console.log(error);
      res.redirect('/');
  }
}

async function show(req, res) {
  try {
  const reward = await Reward.findById(req.params.id);
  res.render('rewards/show', {reward});
  } catch {
    console.log('error')
  }
}

async function edit(req, res) {
  try {
    const reward = await Reward.findById(req.params.id)
    res.render('rewards/edit', {
      reward
    });
  } catch (err) {
  console.log("error");
  }
}

async function update(req, res) {
  try {
    await Reward.findByIdAndUpdate(req.params.id, req.body, {new:true})
    res.redirect(`/rewards/${req.params.id}`);
  }  catch (err) {
    res.render(`/rewards/${req.params.id}/edit`, { errorMsg: err.message });
  }
}

async function deleteReward(req, res) {
  try {
    await Reward.findByIdAndRemove(req.params.id);
    res.redirect('/rewards/all');
  }  catch (err) {
    res.render('/rewards', { errorMsg: err.message });
  }
}

module.exports = {
  new: newReward,
  create,
  index,
  show,
  edit,
  update,
  delete: deleteReward
};