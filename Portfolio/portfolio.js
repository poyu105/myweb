$(document).ready(function () {
    $('.burger').click(function (e) { 
        e.preventDefault();
        $('.navbar').toggleClass('show-menu');
    });

    getData('all');
    $('.btn').click(function (e) { 
        e.preventDefault();
        getData($(this).val());
        $('.active').removeClass('active');
        $(this).addClass('active');
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
            $('.search-sum').remove();

            var sum=0;

            if(val == 'all'){
                $.each(data.portfolios, function (i, value) { 
                    sum++;
                    let card = $('<div>').addClass('card');
                    
                    let cardBottomLine = $('<div>').addClass('bottom-line');
                    let title = $('<h2>').addClass('title').text(data.portfolios[i]["name"]);
                    let describe = $('<div>').addClass('describe').text(data.portfolios[i]["describe"]);
                    let image = $('<img>').addClass('cover-img').attr("src", data.portfolios[i]);

                    //配合排版新增容器
                    //包覆content
                    let content = $('<div>').addClass('main-content');
                    content.append(title ,describe);
                    //包覆image and content
                    let insideContain = $('<div>').addClass('inside-contain');
                    insideContain.append(image ,content);

                    card.append(insideContain,cardBottomLine);
                    $('.post').append(card);
                });
            }
            else{
                $.each(data.portfolios, function (i, value) {
                    if(data.portfolios[i]["type"].includes(val)){
                        sum ++;
                        let card = $('<div>').addClass('card');
                        
                        let cardBottomLine = $('<div>').addClass('bottom-line');
                        let title = $('<h2>').addClass('title').text(data.portfolios[i]["name"]);
                        let describe = $('<div>').addClass('describe').text(data.portfolios[i]["describe"]);
                        let image = $('<img>').addClass('cover-img').attr("src", data.portfolios[i]);

                        //配合排版新增容器
                        //包覆content
                        let content = $('<div>').addClass('main-content');
                        content.append(title ,describe);
                        //包覆image and content
                        let insideContain = $('<div>').addClass('inside-contain');
                        insideContain.append(image ,content);

                        card.append(insideContain,cardBottomLine);
                        $('.post').append(card);
                    }
                });
            }
            let searchSum = $('<div>').addClass('search-sum').text("共"+sum+"筆結果");
            $('.main-nav').after(searchSum);
        }
    });
    console.log("btn value = "+val);
}