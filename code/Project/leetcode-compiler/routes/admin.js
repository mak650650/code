const express = require('express');
const {
    handleAdminRequest,
} = require('./../controller/admin');

const adminRouter = express.Router();

adminRouter.get('/',handleAdminRequest);

module.exports = adminRouter;
