const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
    authors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Author' }]
});

const Book = mongoose.model('Book', BookSchema);

const find = function() {
    return Book.find({}).exec();
}

const findById = function(id) {
    return Book.findById(id).exec();
}

const create = function(inputs, cb) {
    const newBook = new Book(inputs);

    return newBook.save();
}

const update = function(id, newObject) {
    return Book.updateOne({ _id: id }, { $set: newObject });
}

const remove = function(id) {
    return Book.deleteOne({ _id: id })
}

const searchByAuthorNCategory = function(authoName, categoryName) {
    return Book.find({}).populate({ path: 'authors', select: 'name' }).populate('categories').exec();
}

module.exports = {
    find: find,
    findById: findById,
    create: create,
    update: update,
    remove: remove,
    searchByAuthorNCategory: searchByAuthorNCategory
};