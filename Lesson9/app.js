const fs = require('fs');
const express = require('express');
const app = express();
const router = express.Router();
const validator = require('validator');

const FILE_PATH = "./students.json";
var students = [];

router.get('/students', function(req, res) {
    try {
        students = fetchStudentData(FILE_PATH);
    } catch (err) {
        res.status(500).send(err.message);
    }
    res.json(students);
});

router.post('/students', function(req, res) {
    students = fetchStudentData(FILE_PATH);
    createStudent(FILE_PATH, req, res);
});

router.put('/students/:id', function(req, res) {
    const studentId = req.params.id;

    const body = req.body;
    updateStudentData(studentId, body, req, res);
});

router.delete('/students/:id', function(req, res) {
    const studentId = req.params.id;
    // TODO: Validate id
    if (isStudentExist(studentId)) {
        students = students.filter(function(item) {
            return item.id !== studentId;
        });
        rewriteStudentsData(req, res);
    } else {
        res.status(400).send('Invalid data');
    }
});

app.use(express.json());
app.use('/static', express.static(__dirname + '/images'));
app.use(router);

app.listen(3000, function() {
    console.log("Server listening on port 3000");
});

// FILE
function fetchStudentData(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    if (!content) content = '[]';
    return JSON.parse(content);
}

function createStudent(filePath, req, res) {

    let data = req.body;
    // TODO: Data validation
    if (isExistValid(data)) {
        // Append new data to file
        students.push(data);
        fs.writeFile(filePath, JSON.stringify(students), 'utf8', function(err) {
            if (err) res.status(404).send(err.message);
            else res.status(200).json(req.body);
        });
    } else {
        res.status(400).send('Invalid Data');
    }
}

function rewriteStudentsData(req, res) {
    fs.writeFile(FILE_PATH, JSON.stringify(students), 'utf8', function(err) {
        if (err) res.status(404).send(err.message);
        else res.status(200).send('Success');
    });
}

function updateStudentData(studentId, body, req, res) {
    newStudent = {};
    newStudent['id'] = studentId;
    newStudent['name'] = body.name;
    newStudent['age'] = body.age;
    // TODO: Validate body, id
    if (!isExistValid(newStudent)) {
        students = fetchStudentData(FILE_PATH);
        students = students.map(function(item) {
            if (item.id === studentId) {
                return newStudent;
            }

            return item;
        });
        rewriteStudentsData(req, res);
    } else {
        res.status(400).send('Invalid Data');
    }
}

function isExistValid(data) {
    students = fetchStudentData(FILE_PATH);
    if (!validator.isInt(data.id) || !/^[a-zA-Z ]+$/.test(data.name) || !validator.isInt(data.age)) {
        return false;
    }
    if (isStudentExist(data.id)) {
        return false;
    }

    return true;
}

function isStudentExist(id) {
    return students.find(function(item) {
        return item.id === id;
    });
}