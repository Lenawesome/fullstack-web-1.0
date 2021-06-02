const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
    name: String,
    description: String
});

const Category = mongoose.model('Category', CategorySchema);

const find = function() {
    return Category.find({}).exec();
}

const findById = function(id) {
    return Category.findById(id).exec();
}

const create = function(inputs, cb) {
    const newCategory = new Category(inputs);

    return newCategory.save();
}

const update = function(id, newObject) {
    return Category.updateOne({ _id: id }, { $set: newObject });
}

const remove = function(id) {
    return Category.deleteOne({ _id: id })
}

module.exports = {
    find: find,
    findById: findById,
    create: create,
    update: update,
    remove: remove
};