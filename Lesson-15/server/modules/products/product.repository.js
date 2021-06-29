const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
  title: String,
  description: String,
  thumbnail: String
}, {
  timestamps: true
});

const Product = mongoose.model('Product', ProductSchema);

const find = async function (query, limit, offset) {
  const data = await Product
  .find(query)
  .limit(limit)
  .skip(offset)
  .exec();

  const total = await Product.count(query);

  return {
    data,
    total
  }
}

const findById = function (id, cb) {
  Product.findById(id).exec(function (err, data) {
    cb(data);
  });
}

const create = function (inputs, cb) {
  const newProduct = new Product(inputs);

  return newProduct.save();
}

const update = function (id, newObject, cb) {
  Product.updateOne({ _id: id }, { $set: newObject }, function() {
    cb();
  });
}

const remove = function (id, cb) {
  Product.deleteOne({ _id: id }, function() {
    cb();
  });
}

module.exports = {
  find: find,
  findById: findById,
  create: create,
  update: update,
  remove: remove
};