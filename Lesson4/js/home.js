$(document).ready(bindClickEvents);

function bindClickEvents() {

    $('.edit').click(function () {
        let inputs = $(this).parents('tr').find('td:not(:last-child)');

        for (let i = 0; i < inputs.length; i++) {
            inputs[i].innerHTML = `<input type="text" value="${inputs[i].textContent}"/>`;
        }

        $(this).addClass('disabled');
        $(this).parents('tr').find('td:last-child .save').removeClass('disabled');
    });

    $('.save').click(function () {
        let inputs = $(this).parents('tr').find('td:not(:last-child) input');
        for (let i = 0; i < inputs.length; i++) {
            $(inputs[i]).parent()[0].innerHTML = inputs[i].value;
        }

        $(this).addClass('disabled');
        $(this).parents('tr').find('td:last-child .edit').removeClass('disabled');
    });

    $('.delete').click(function () {
        $(this).parents('tr').remove();
    });

    $('#form-search').submit(function (event) {
        event.preventDefault();
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
    });
}


