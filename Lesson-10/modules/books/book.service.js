const repository = require('./book.repository');

const find = function(query) {
    // Business logic

    // Querying
    return repository.find(query);
}

const create = function(inputs) {
    // Business logic

    // Data validation

    // Persist data
    return repository.create(inputs);
}

const update = function(id, newObject) {
    // Business logic

    // Persist data
    return repository.update(id, newObject);
}

const remove = function(id) {
    return repository.remove(id);
}

const searchByAuthorNCategory = function(authorName, categoryName) {
    return repository.searchByAuthorNCategory(authorName, categoryName);
}

module.exports = {
    find: find,
    create: create,
    update: update,
    remove: remove,
    searchByAuthorNCategory: searchByAuthorNCategory
};