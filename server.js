/*
    react의 app.js와 구분하기 위해 app.js => server.js으로 변경
*/
const express = require('express');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();


app.use('/', indexRouter);
app.use('/users', usersRouter);


module.exports = app;

