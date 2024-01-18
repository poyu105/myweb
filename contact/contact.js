$(document).ready(function () {
    $('.burger').click(function (e) { 
        e.preventDefault();
        $('.navbar').toggleClass('show-menu');
    });
});