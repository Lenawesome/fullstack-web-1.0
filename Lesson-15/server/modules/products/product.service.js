const repository = require('./product.repository');

const find = function (query) {
  if (!query.limit) {
    throw new Error('Must have limit');
  }

  if (query.limit > 100) {
    throw new Error('You cannot fetch that many');
  }

  if (!query.offset) {
    query.offset = 0;
  }

  const limit = Number(query.limit);
  const offset = Number(query.offset);

  delete query.limit;
  delete query.offset;

  // Transform query - Data validation
  const supportedQueryFields = ['title', 'description'];

  Object.keys(query).forEach(function (key) {
    if (!supportedQueryFields.includes(key)) {
      throw new Error(`Unrecognized field: ${key}`);
    }
  });

  // Querying
  return repository.find(query, limit, offset);
}

const create = function (inputs) {
  // Business logic

  // Data validation

  // Persist data
  return repository.create(inputs);
}

const update = function (id, newObject, cb) {
  // Business logic

  // Persist data
  repository.update(id, newObject, cb);
}

const remove = function (id, cb) {
  repository.remove(id, cb);
}

module.exports = {
  find: find,
  create: create,
  update: update,
  remove: remove
};