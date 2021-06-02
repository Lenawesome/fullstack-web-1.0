var students = [];
const port = 3001;
$(document).ready(function() {
    initData();
    bindClickEvents();
});

function initData(callback = null) {
    $.ajax({
        type: "GET",
        url: `http://localhost:${port}/students`,
        dataType: "json"
    }).done(function(res) {
        students = res;
        jQuery('tbody').html('');
        students.forEach(student => {
            jQuery('tbody').append(`
            <tr>
            <th data-type="id" scope="row">${student.id}</th>
            <td data-type="fullname">${student.name}</td>
            <td data-type="age">${student.age}</td>
            <td>
                <a href="#" class="save disabled" title="" data-id="${student.id}" data-toggle="tooltip" data-original-title="Add"><i
      class="material-icons">save</i></a>
                <a href="#" class="edit" title="" data-toggle="tooltip" data-original-title="Edit"><i
      class="material-icons">edit</i></a>
                <a href="#" class="delete" data-id="${student.id}" title="" data-toggle="tooltip" data-original-title="Delete"><i
      class="material-icons">delete</i></a>
            </td>
        </tr>`);
        });
        if (callback) {
            callback();
        }
    }).fail(function(jqXHR, textStatus, errorThrown) {
        jQuery('tbody').append("Failed to connect to server!!!");
    });
}

function seachByID() {
    let searchInput = $('input[name="search"]').val();
    let allRows = $('table tbody tr');

    if (searchInput || searchInput === 0) {
        for (let i = 0; i < allRows.length; i++) {
            let studentId = $(allRows[i]).find('th[data-type="id"]')[0].textContent;
            if (!studentId.includes(searchInput)) {
                $(allRows[i]).hide();
            } else {
                $(allRows[i]).show();
            }
        }
    } else {
        $(allRows).show();
    }
}

function bindClickEvents() {

    $('body').on('click', '.edit', function() {
        let inputs = $(this).parents('tr').find('td:not(:last-child)');

        for (let i = 0; i < inputs.length; i++) {
            inputs[i].innerHTML = `<input type="text" value="${inputs[i].textContent}"/>`;
        }

        $(this).addClass('disabled');
        $(this).parents('tr').find('td:last-child .save').removeClass('disabled');
    });

    $('body').on('click', '.save', function() {
        let inputs = $(this).parents('tr').find('td:not(:last-child) input');
        let settings = {};
        let studentID, name, age;
        if ($(this).hasClass('new')) {
            inputs = $(this).parents('tr').find('input');
            studentID = inputs[0].value;
            name = inputs[1].value;
            age = inputs[2].value;
            settings = {
                "url": `http://localhost:${port}/students`,
                "method": "POST",
                "timeout": 0,
                "headers": {
                    "Content-Type": "application/json"
                },
                "data": JSON.stringify({ "id": studentID, "name": name, "age": age }),
            };

        } else {
            settings = {
                "url": `http://localhost:3001/students/${studentID}`,

                "method": "PUT",
                "timeout": 0,
                "headers": {
                    "Content-Type": "application/json"
                },
                "data": JSON.stringify({ "id": studentID, "name": name, "age": age }),
            };
            studentID = $(this).data('id');
            name = inputs[0].value;
            age = inputs[1].value;
        }

        $.ajax(settings).done(function(response) {
            if (response == 'Success') {
                for (let i = 0; i < inputs.length; i++) {
                    $(inputs[i]).parent()[0].innerHTML = inputs[i].value;
                }
                $(this).addClass('disabled');
                $(this).parents('tr').find('td:last-child .edit').removeClass('disabled');
            } else {
                alert(response);
            }
        });
    });

    $('body').on('click', '.delete', function() {
        let studentID = $(this).data('id');
        let thisRow = $(this);
        var settings = {
            "url": `http://localhost:${port}/students/${studentID}`,
            "method": "DELETE",
            "timeout": 0,
        };

        $.ajax(settings).done(function(response) {
            if (response == "Success") {
                $(thisRow).parents('tr').remove();
            } else {
                alert(response);
            }
        });
    });

    $('body').on('submit', '#form-search', function(event) {
        event.preventDefault();
        initData(seachByID);
    });

    $('#create').on('click', function() {
        $('tbody').append(`<tr>
        <th data-type="id" scope="row"><input type="text" value=""></th>
        <td data-type="fullname"><input type="text" value=""></td>
        <td data-type="age"><input type="text" value=""></td>
        <td>
            <a href="#" class="save new" title="" data-toggle="tooltip" data-original-title="Add"><i class="material-icons">save</i></a>
            <a href="#" class="edit disabled" title="" data-toggle="tooltip" data-original-title="Edit"><i class="material-icons">edit</i></a>
            <a href="#" class="delete" title="" data-toggle="tooltip" data-original-title="Delete"><i class="material-icons">delete</i></a>
        </td>
    </tr>`);
    })
}