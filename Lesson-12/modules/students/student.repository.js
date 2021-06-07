const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
    name: String,
    age: Number,
    phoneNumb: String
});

const Student = mongoose.model('Student', StudentSchema);

const find = async function(query, limit, offset) {
    const students = await Student
        .find(query)
        .limit(limit)
        .skip(offset)
        .exec();

    const total = await Student.countDocuments(query);

    return { students, total };
}


const findById = function(id) {
    return Student.findById(id).exec();
}

const create = function(inputs, cb) {
    const newStudent = new Student(inputs);

    return newStudent.save();
}

const update = function(id, newObject) {
    return Student.updateOne({ _id: id }, { $set: newObject });
}

const remove = function(id) {
    return Student.deleteOne({ _id: id })
}

module.exports = {
    find: find,
    findById: findById,
    create: create,
    update: update,
    remove: remove
};