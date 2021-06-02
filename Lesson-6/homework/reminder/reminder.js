var toDoList = localStorage.getItem('todoList') ? JSON.parse(localStorage.getItem('todoList')) : [];

$(document).ready(function () {
    fetchData(toDoList);
    bindInitEvent();
});



function fetchData(toDoList) {
    let html = '';
    toDoList.forEach(element => {
        let title = element.title;
        let deadline = calculateDeadline(element.deadline, new Date());
        let isDone = element.isDone ? 'checked' : '';
        let id = element.id;
        html += `<li class="todo-item">
                    <div class="todo-item-title">${title}</div>
                    <i>${deadline}</i>
                    <input ${isDone} class="checked-flag form-check-input" type="checkbox" onchange="setStatus(${id})">
                    <button onclick="deleteById(${id})" type="button" class="btn-close delete-btn" aria-label="Close"></button>
                </li>`;
    });
    $(".todo-list").html(html);
}

function bindInitEvent() {
    $("#add-reminder").on('submit', function (e) {
        e.preventDefault();
        let title = $("#add-reminder input[name='title']").val();
        let deadline = $("#add-reminder input[name='deadline']").val();
        let isDone = 0;
        let newItem = { id: Date.now(), title: title, deadline: deadline, isDone: isDone };
        toDoList.push(newItem);
        localStorage.setItem('todoList', JSON.stringify(toDoList));
        clearInput();
        fetchData(toDoList);
    })
    $("#datepicker").datepicker();

    $(".submit").on('click', function () {

    });
}

function clearInput() {
    $("#add-reminder input[name='title']").val("");
    $("#add-reminder input[name='deadline']").val("");
}


function deleteById(id) {
    toDoList = toDoList.filter(function (obj) {
        return obj.id !== id;
    });
    localStorage.setItem('todoList', JSON.stringify(toDoList));
    fetchData(toDoList);
}

function setStatus(id) {
    toDoList.forEach(element => {
        if (element.id == id) {
            element.isDone = element.isDone ? 0 : 1;
        }
    });
    localStorage.setItem('todoList', JSON.stringify(toDoList));
    fetchData(toDoList);
}


function calculateDeadline(deadLine, dateNow) {
    deadLine = new Date(deadLine);
    deadLine.setHours(23, 59, 59);
    if (deadLine < dateNow) {
        return `Time's up`;
    }
    let diffInMilliSeconds = Math.abs(deadLine - dateNow) / 1000;

    // calculate days
    const days = Math.floor(diffInMilliSeconds / 86400);
    diffInMilliSeconds -= days * 86400;
    console.log('calculated days', days);

    // calculate hours
    const hours = Math.floor(diffInMilliSeconds / 3600) % 24;
    diffInMilliSeconds -= hours * 3600;
    console.log('calculated hours', hours);

    // calculate minutes
    const minutes = Math.floor(diffInMilliSeconds / 60) % 60;
    diffInMilliSeconds -= minutes * 60;
    console.log('minutes', minutes);

    let difference = '';
    if (days > 0) {
        difference += (days === 1) ? `${days} day, ` : `${days} days, `;
    }

    difference += (hours === 0 || hours === 1) ? `${hours} hour, ` : `${hours} hours, `;

    difference += (minutes === 0 || hours === 1) ? `${minutes} minutes` : `${minutes} minutes`;

    return difference;
}


