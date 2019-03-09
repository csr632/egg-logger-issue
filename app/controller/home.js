'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    throw new Error('意料之中的错误');
  }
}

module.exports = HomeController;
