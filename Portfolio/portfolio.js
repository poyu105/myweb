$(document).ready(function () {
    $('.burger').click(function (e) { 
        e.preventDefault();
        $('.navbar').toggleClass('show-menu');
    });

    getData('all');
    $('.btn').click(function (e) { 
        e.preventDefault();
        getData($(this).val());
    });
});
function getData(val){
    $.ajax({
        type: "get",
        url: "./portfolio.json",
        data: "",
        dataType: "json",
        success: function (data) {
            //初始化post
            $('.post').empty();

            if(val == 'all'){
                $.each(data.portfolios, function (i, value) { 
                    console.log("loop on : "+data.portfolios[i]["name"]);
                    let title = $('<div>').addClass('title').text(data.portfolios[i]["name"]);
                    let describe = $('<div>').addClass('describe').text(data.portfolios[i]["describe"]);
                    let image = $('<img>').addClass('cover-img').attr("src", data.portfolios[i]["image"]);;
                    $('.post').append(image);
                });
            }
        }
    });
    console.log("btn value = "+val);
}