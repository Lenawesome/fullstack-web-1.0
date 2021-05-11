let action = prompt("Chao mung den voi chuong trinh quan ly sinh vien, lua chon cua ban la (C,R,U,D)");
let studentsObject = {};
let fullname, age, id;
studentsObject["B15DCCN040"] = {
    "fullname": "Le Ngoc Anh",
    "age": "25"
}

switch (action) {
    case "C":
        fullname = prompt("Ho va ten: ");
        age = prompt("Tuoi: ");
        id = prompt("Ma sinh vien: ");
        studentsObject = addNewStudent(studentsObject, fullname, age, id);
        if (studentsObject) {
            console.log(`Them moi sinh vien thanh cong`);
            showAllStudentList(studentsObject);
        } else {
            console.log(`Da ton tai sinh vien voi id ${id}`);
        }
        break;
    case "R":
        id = prompt(`Nhap ma so sinh vien can tim kiem`);
        readStudentById(id);
        break;
    case "U":
        id = prompt("Ma sinh vien: ");
        if (!readStudentById(id)) {
            break;
        };
        console.log(`Cap nhat sinh vien voi id ${id} `);
        fullname = prompt("Ho va ten: ");
        age = prompt("Tuoi: ");
        let needUpdatingId = prompt(`Ban co muon thay doi ma sinh vien Y/N (ma sv cu ${id})`);
        let newId = null;
        if (needUpdatingId == `Y`) {
            newId = prompt(`Ma sinh vien moi la `);
        }
        studentsObject = addNewStudent(studentsObject, fullname, age, id, true, newId);
        showAllStudentList(studentsObject);
        break;
    case "D":
        id = prompt(`Nhap ma sinh vien can xoa`);
        deleteStudentById(id);
        break;
}

function showAllStudentList() {
    console.log("List sinh vien: ");
    for (key in studentsObject) {
        console.log(`Ma sinh vien: ${key}`);
        console.log(`Ho va ten: ${studentsObject[key]["fullname"]}`);
        console.log(`Tuoi: ${studentsObject[key]["age"]}`); ``
        console.log(`--------------------`)
    }
}

function addNewStudent(studentsObject, fullname, age, id, isUpdating = false, newId = null) {
    let newStudentsObject = studentsObject;
    if (!newStudentsObject[id] && newStudentsObject != 0) {
        if(isUpdating){
            newStudentsObject[newId] = {
                "fullname": fullname,
                "age": age
            }
            delete newStudentsObject[id];
            return newStudentsObject;
        }else{
            newStudentsObject[id] = {
                "fullname": fullname,
                "age": age
            }
        }
    }
    return false;
}

function readStudentById(id) {
    if (studentsObject[id]) {
        console.log(`Thong tin ve sinh vien co id ${id}: `);
        console.log(`Ho va ten: ${studentsObject[id]["fullname"]}`);
        console.log(`Tuoi: ${studentsObject[id]["age"]}`);
    } else {
        console.log(`Khong ton tai sinh vien voi id: ${id}`);
    }
    return Boolean(studentsObject[id]);
}

function deleteStudentById(id) {
    if (readStudentById(id)) {
        delete studentsObject[id];
        console.log(`Xoa thanh cong sinh vien voi id: ${id}`);
    }
}