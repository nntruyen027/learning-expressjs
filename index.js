const express = require('express');
const user = require('./userRouter');

let app = express();

app.use('/user', user);

app.listen(3000)