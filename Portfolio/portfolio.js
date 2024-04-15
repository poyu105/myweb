$(document).ready(function () {
    $('.burger').click(function (e) { 
        e.preventDefault();
        $('.navbar').toggleClass('show-menu');
    });
    //init pageData
    getData('all');
    //change data by btn
    $('.btn').click(function (e) { 
        e.preventDefault();
        getData($(this).val());
        $('.btn.active').removeClass('active');
        $(this).addClass('active');

        // 获取按钮的值
        var btnValue = $(this).val();
        // 将 select 中带有相同值的 option 设置为 selected
        $('.main-nav select').val(btnValue);
    });
    //change data by slc
    $('.slc-nav').change(function (e) { 
        e.preventDefault();
        var selectValue=$(this).find(':selected').val();
        getData(selectValue);

        // 将按钮中带有相同值的按钮设置为 active
        $('.main-nav .btn').each(function() {
            if ($(this).val() === selectValue) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });
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
                    let image = $('<img>').addClass('cover-img').attr("src", data.portfolios[i]["image"]);
                    let link = $('<a>').addClass('visit-link').text("造訪網頁").attr("href",data.portfolios[i]["link"]);

                    //配合排版新增容器
                    //包覆content
                    let content = $('<div>').addClass('main-content');
                    content.append(title ,describe, link);
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
                        let image = $('<img>').addClass('cover-img').attr("src", data.portfolios[i]["image"]);
                        let link = $('<a>').addClass('visit-link').text("造訪網頁").attr("href",data.portfolios[i]["link"]);

                        //配合排版新增容器
                        //包覆content
                        let content = $('<div>').addClass('main-content');
                        content.append(title ,describe, link);
                        //包覆image and content
                        let insideContain = $('<div>').addClass('inside-contain');
                        insideContain.append(image ,content);

                        card.append(insideContain,cardBottomLine);
                        $('.post').append(card);
                    }
                });
            }
            let searchSum = $('<div>').addClass('search-sum').text("共"+sum+"筆結果");
            $('.show-search-result').after(searchSum);
            //no results found msg
            if(sum==0){
                let card = $('<div>').addClass('card');
                let title = $('<h2>').addClass('title').text("Type : "+val+". No results found!");
                card.append(title);
                $('.post').append(card);
            }
        }
    });
}