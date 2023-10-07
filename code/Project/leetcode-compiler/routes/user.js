const express = require('express');
const { 
    handleUserRequest,
} = require('./../controller/user');

const userRouter = express.Router();

userRouter.get("/",handleUserRequest);

module.exports = userRouter;