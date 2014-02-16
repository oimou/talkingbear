var serve = require('koa-static');
var koa = require('koa');
var router = require('koa-router');
var parse = require('co-body');
var exec = require('child_process').exec;
var util = require('util');
var BIN_JSAY = '/usr/local/bin/jsay';

var app = koa();

function *say(next) {
  var body = yield parse(this);
  var phrase = body.phrase;

  exec(util.format('%s "%s"', BIN_JSAY, phrase));

  this.body = 'ok';
  yield next;
}

app.use(router(app));
app.post('/say', say);
app.use(serve('dist'));
app.listen(8081);
