'use strict';

const { app, assert, mock } = require('egg-mock/bootstrap');
// mock.consoleLevel('NONE'); 在这里使用mock.consoleLevel有效，但是这会使所有测试的日志都关闭

describe('test/app/controller/home.test.js', () => {
  it('should assert', function* () {
    const pkg = require('../../../package.json');
    assert(app.config.keys.startsWith(pkg.name));

    // const ctx = app.mockContext({});
    // yield ctx.service.xx();
  });
  describe('should return 500', () => {
    before(() => {
      // 我希望【只在这一个describe块中】关闭console日志
      mock.consoleLevel('NONE'); // 在这里使用mock.consoleLevel无效
    });
    it('should GET /', () => {
      return app
        .httpRequest()
        .get('/')
        .expect(500);
    });
  });
});
