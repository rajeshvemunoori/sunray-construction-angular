
$(document).ready(function () {
    setupDatePicker();
});

function setupDatePicker() {
    // attach calendar to date inputs
    $(".date").dateinput({
        format: 'mm/dd/yyyy',
        trigger: false
    });
}