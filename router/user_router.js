const express = require('express');
const userRouter = express.Router();
const {createUser, loginUser} = require('../controller/user_controller');

userRouter.post('/signup',createUser);
userRouter.post('/login',loginUser);

module.exports = userRouter;
