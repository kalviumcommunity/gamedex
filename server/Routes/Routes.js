const express = require("express");
const userSignup = require('../Controller/User-controller.js');
const userLogin = require('../Controller/User-controller.js');

const Router = express.Router();

Router.post('/signup', userSignup);
Router.post('/login', userLogin);

module.exports = Router;