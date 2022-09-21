var express = require('express');
var router = express.Router();
var _ = require('lodash');
var logger = require('../lib/logger');
var log = logger();
const User = require("../models/user");
const { createToken } = require("../token");

//var users = require('../init_data.json').data;
//var curId = _.size(users);

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try{
    const users = await User.findAll();
    return res.json({ users });
  } catch(err){
    return next(err);
  }
  // res.json(_.toArray(users));
});

/* Create a new user */
router.post('/', async function(req, res, next) {
  try{
  const user = await User.register(req.body);
  //user.id = curId++;
  const token = createToken(user);
  return res.status(201).json({ user, token });
} catch(err){
  return next(err);
}
  // if (!user.state)
  //   user.state = 'pending';
  // }
  // users[user.id] = user;
  // log.info('Created user', user);
  // res.json(user);
});

/* Get a specific user by id */
router.get('/:id', async function(req, res, next) {
  try{
  var user = await User.findOne(req.params.id);
  if (!user) {
    return next();
  }
  res.json({ user });
} catch(err){
  return next(err);
}
});

/* Delete a user by id */
router.delete('/:id', async function(req, res, next) {
  try{
  await User.remove(req.params.id);
  return res.json({ message: "User deleted" });
  } catch(err){
    return next(err);
  }
  });

  // var user = users[req.params.id];
  // delete users[req.params.id];
  // res.status(204);
  // log.info('Deleted user', user);
  // res.json(user);

/* Update a user by id */
router.put('/:id', async function(req, res, next) {
  try{
  const user = await User.update(req.params.id, req.body);
  return res.json({ user });
  } catch(err){
    return next(err);
  }
});
/*   var user = req.body;
  if (user.id != req.params.id) {
    return next(new Error('ID paramter does not match body'));
  }
  users[user.id] = user;
  log.info('Updating user', user);
  res.json(user);
}); */


module.exports = router;
