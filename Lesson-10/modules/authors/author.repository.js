const mongoose = require('mongoose');

const AuthorSchema = mongoose.Schema({
    name: String,
    age: Number,
    phoneNumb: String
});

const Author = mongoose.model('Author', AuthorSchema);

const find = function() {
    return Author.find({}).exec();
}

const findById = function(id) {
    return Author.findById(id).exec();
}

const create = function(inputs, cb) {
    const newAuthor = new Author(inputs);

    return newAuthor.save();
}

const update = function(id, newObject) {
    return Author.updateOne({ _id: id }, { $set: newObject });
}

const remove = function(id) {
    return Author.deleteOne({ _id: id })
}

module.exports = {
    find: find,
    findById: findById,
    create: create,
    update: update,
    remove: remove
};