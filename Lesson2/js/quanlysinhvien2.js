
let studentsArray = [];

studentsArray["A1"] = {
    "fullname": "Le Ngoc Anh1",
    "age": "25"
}

studentsArray["A2"] = {
    "fullname": "Le Ngoc Anh2",
    "age": "25"
}

studentsArray["A3"] = {
    "fullname": "Le Ngoc Anh3",
    "age": "25"
}

let id;

do {
    var action = prompt("Welcome to students management app, what do you want (R,U,D)")
    switch (action) {
        case "R":
            id = prompt("Ma sinh vien");
            showStudentById(id);
            break;
        case "U":
            id = prompt("Ma sinh vien");
            if(!studentsArray[id]){
                console.log("Ma sinh vien khong ton tai");
                break;
            }
            let fullname = prompt("Nhap ten (bo trong neu khong can cap nhat)");
            let age = prompt("Nhap tuoi (bo trong neu khong can cap nhat)");
            studentsArray = updateStudentById(id, fullname, age);
            showStudentById(id);
            break;
        case "D":
            id = prompt("Ma sinh vien");
            deleteStudentById(id);
            showAllStudent();
            break;
    }
} while (action != "exit")

function showStudentById(id) {
    if (studentsArray[id]) {
        console.log(`Ma sinh vien: ${id}`);
        console.log(`Ho va ten: ${studentsArray[id]["fullname"]}`);
        console.log(`Tuoi: ${studentsArray[id]["age"]}`);
    } else {
        console.log(`Khong tin tai ma sinh vien: ${id}`);
    }
}z


function updateStudentById(id, fullname, age) {
    let newStudentArray = studentsArray;
    if (newStudentArray[id]) {
        newStudentArray[id]["fullname"] = (fullname||fullname===0) ? fullname : newStudentArray[id]['fullname'];
        newStudentArray[id]["age"] = (age||fullname===0) ? age : newStudentArray[id]["age"];
    }
    return newStudentArray;
}
function deleteStudentById(id){
    if(studentsArray[id]){
        console.clear();
        delete studentsArray[id];
    }else{
        console.log(`Ma sinh vien ${id} khong ton tai`)
    }
}
function showAllStudent(){
    console.log("List sinh vien: ");
    for (key in studentsArray) {
        console.log(`Ma sinh vien: ${key}`);
        console.log(`Ho va ten: ${studentsArray[key]["fullname"]}`);
        console.log(`Tuoi: ${studentsArray[key]["age"]}`); ``
        console.log(`--------------------`)
    }
}