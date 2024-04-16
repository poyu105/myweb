$(document).ready(function () {
    const date = new Date(document.lastModified);
    $('.lastModifiedDate').html('Update: ' + formatDate(date));
    $('.burger').click(function (e) { 
        e.preventDefault();
        $('.navbar').toggleClass('show-menu');
    });
});
//formatDate
function formatDate(date) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
    const day = days[date.getDay()];
    const month = months[date.getMonth()];
    const dayOfMonth = date.getDate();
    const year = date.getFullYear();
  
    return `${day} ${month} ${dayOfMonth}, ${year}`;
  }