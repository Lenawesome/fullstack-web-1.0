const express = require('express');
const app = express();
const mongoose = require('mongoose');
const configs = require('./config/index.js');
const studentRouter = require('./modules/categorys/category.router');
const authorRouter = require('./modules/authors/author.router');
const bookRouter = require('./modules/books/book.router');

mongoose.connect(configs.MONGO_CONNECTION_URL);

app.use(express.json());
app.use('/api/categorys', studentRouter.router);
app.use('/api/authors', authorRouter.router);
app.use('/api/books', bookRouter.router);
app.use('/', express.static(__dirname + '/views'));

app.listen(configs.PORT, function() {
    console.log(`Server listening on port ${configs.PORT}`);
});