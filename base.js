$(document).ready(function () {
    const date = new Date(document.lastModified);
    $('.lastModifiedDate').html('Update: '+date);
});