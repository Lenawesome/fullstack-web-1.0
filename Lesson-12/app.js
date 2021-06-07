const express = require('express');
const app = express();
const mongoose = require('mongoose');
const configs = require('./config/index.js');
const studentRouter = require('./modules/students/student.router');

mongoose.connect(configs.MONGO_CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use('/api/students', studentRouter.router);
app.use('/', express.static(__dirname + '/views'));

app.listen(configs.PORT, function() {
    console.log(`Server listening on port ${configs.PORT}`);
});