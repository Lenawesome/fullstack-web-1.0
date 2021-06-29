const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const configs = require('./config/index.js');
const productRouter = require('./modules/products/product.router');

mongoose.connect(configs.MONGO_CONNECTION_URL);

app.use(cors({
  origin: '*'
}));
app.use(express.json());
app.use('/api/products', productRouter.router);
app.use('/images', express.static(__dirname + '/images'));

app.listen(configs.PORT, function () {
  console.log(`Server listening on port ${configs.PORT}`);
});