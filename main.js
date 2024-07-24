$(document).ready(function () {
    
    //LastUpdateDate-function
    const date = new Date(document.lastModified);
    $('.lastModifiedDate').html('Update: ' + formatDate(date));

    //change current section to active
    $('#nav-menu .nav-link').click(function (e) { 
        $('#nav-menu .nav-link.active').removeClass('active');
        $(this).addClass('active');
    });

    //Portfolio-function
    //init pageData
    getData('all');
    //change data by btn
    $('#portfolio .btn').click(function (e) { 
        e.preventDefault();
        getData($(this).val());
        $('#portfolio .btn.active').removeClass('active');
        $(this).addClass('active');

        // 获取按钮的值
        var btnValue = $(this).val();
        // 将 select 中带有相同值的 option 设置为 selected
        $('#portfolio select').val(btnValue);
    });
    //change data by select
    $('#portfolio select').change(function (e) { 
        e.preventDefault();
        var selectValue=$(this).find(':selected').val();
        getData(selectValue);

        // 将按钮中带有相同值的按钮设置为 active
        $('#portfolio .btn').each(function() {
            if ($(this).val() === selectValue) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });
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
//get data from portfolio
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
                    let card = $('<div>').addClass('card mb-3');
                    let cardrow = $('<div>').addClass('row g-0');
                    let cardcol4 = $('<div>').addClass('col-md-4');
                    
                    // 建立輪播圖結構
                    let carouselId = 'carousel' + i;
                    let carousel = $('<div>').addClass('carousel slide').attr({
                        'id': carouselId,
                        'data-bs-ride': 'carousel',
                        'data-bs-interval': '3000',
                        'style':'cursor: pointer;'
                    });
                    let carouselInner = $('<div>').addClass('carousel-inner');

                    // 增加輪播圖項目
                    data.portfolios[i]["images"].forEach((imgUrl, index) => {
                        let carouselItem = $('<div>').addClass('carousel-item');
                        if(index === 0) carouselItem.addClass('active');
                        let img = $('<img>').addClass('d-block w-100 rounded').attr("src", imgUrl);
                        carouselItem.append(img);
                        carouselInner.append(carouselItem);

                        // 設置圖片點擊事件
                        img.on('click', function() {
                            $('#modalImage').attr('src', imgUrl);
                            $('#imageModal').modal('show');
                        });
                    });

                    // 加入輪播圖控制按鈕
                    let prevButton = $('<button>').addClass('carousel-control-prev').attr({
                        'type': 'button',
                        'data-bs-target': '#' + carouselId,
                        'data-bs-slide': 'prev'
                    });
                    prevButton.append('<span class="carousel-control-prev-icon" aria-hidden="true"></span>');
                    prevButton.append('<span class="visually-hidden">Previous</span>');

                    let nextButton = $('<button>').addClass('carousel-control-next').attr({
                        'type': 'button',
                        'data-bs-target': '#' + carouselId,
                        'data-bs-slide': 'next'
                    });
                    nextButton.append('<span class="carousel-control-next-icon" aria-hidden="true"></span>');
                    nextButton.append('<span class="visually-hidden">Next</span>');

                    carousel.append(carouselInner, prevButton, nextButton);
                    cardcol4.append(carousel);

                    let cardcol8 = $('<div>').addClass('col-md-8');
                    let cardbody = $('<div>').addClass('card-body');
                    let title = $('<h3>').addClass('card-title fw-bold').text(data.portfolios[i]["name"]);
                    let cardtext = $('<div>').addClass('card-text').text(data.portfolios[i]["describe"]);
                    //cardfooter
                    let cardfooter = $('<div>');
                    //updateDate
                    let date = $('<span>').addClass('fs-6').text(data.portfolios[i]["date"]);
                    //tags
                    let tags = $('<ul>').addClass('d-flex flex-wrap gap-1 m-0 p-0');
                    data.portfolios[i]["tag"].forEach((tag)=>{
                        let taglist = $('<li>').addClass('fs-6 list-none').text("#"+tag);
                        tags.append(taglist);
                    })
                    cardfooter.append(date, tags);

                    //_blank icon
                    let linkicon = $('<i>').addClass('bi bi-box-arrow-up-right');
                    //link disabled if the data has "NONE" link
                    let link = $('<a>').addClass('btn btn-primary mt-1 me-2 '+(data.portfolios[i]["link"] === "NONE" ? 'disabled' : '')).text("造訪網頁").attr({
                        'href' : data.portfolios[i]["link"],
                        'target' : '_blank'
                    });
                    link.append(linkicon);
                    //_blank icon
                    let sourceicon = $('<i>').addClass('bi bi-box-arrow-up-right');
                    //source link
                    let sourceLink = $('<a>').addClass('btn btn-secondary mt-1 me-2').text("Source Code").attr({
                        'href' : data.portfolios[i]["source link"],
                        'target' : '_blank'
                    });
                    sourceLink.append(sourceicon);

                    cardbody.append(title, cardtext, cardfooter, link, sourceLink);
                    cardcol8.append(cardbody);
                    cardrow.append(cardcol4, cardcol8);
                    card.append(cardrow);
                    
                    $('.post').append(card);

                    // 手動初始化輪播
                    new bootstrap.Carousel(document.querySelector('#' + carouselId), {
                        interval: 3000,
                        ride: 'carousel'
                    });
                });
            }
            else{
                $.each(data.portfolios, function (i, value) {
                    if(data.portfolios[i]["type"].includes(val)){
                        sum++;
                        let card = $('<div>').addClass('card mb-3');
                        let cardrow = $('<div>').addClass('row g-0');
                        let cardcol4 = $('<div>').addClass('col-md-4');
                        
                        // 建立輪播圖結構
                        let carouselId = 'carousel' + i;
                        let carousel = $('<div>').addClass('carousel slide').attr({
                            'id': carouselId,
                            'data-bs-ride': 'carousel',
                            'data-bs-interval': '3000',
                            'style':'cursor: pointer;'
                        });
                        let carouselInner = $('<div>').addClass('carousel-inner');

                        // 增加輪播圖項目
                        data.portfolios[i]["images"].forEach((imgUrl, index) => {
                            let carouselItem = $('<div>').addClass('carousel-item');
                            if(index === 0) carouselItem.addClass('active');
                            let img = $('<img>').addClass('d-block w-100 rounded').attr("src", imgUrl);
                            carouselItem.append(img);
                            carouselInner.append(carouselItem);

                            // 設置圖片點擊事件
                            img.on('click', function() {
                                $('#modalImage').attr('src', imgUrl);
                                $('#imageModal').modal('show');
                            });
                        });

                        // 加入輪播圖控制按鈕
                        let prevButton = $('<button>').addClass('carousel-control-prev').attr({
                            'type': 'button',
                            'data-bs-target': '#' + carouselId,
                            'data-bs-slide': 'prev'
                        });
                        prevButton.append('<span class="carousel-control-prev-icon" aria-hidden="true"></span>');
                        prevButton.append('<span class="visually-hidden">Previous</span>');

                        let nextButton = $('<button>').addClass('carousel-control-next').attr({
                            'type': 'button',
                            'data-bs-target': '#' + carouselId,
                            'data-bs-slide': 'next'
                        });
                        nextButton.append('<span class="carousel-control-next-icon" aria-hidden="true"></span>');
                        nextButton.append('<span class="visually-hidden">Next</span>');

                        carousel.append(carouselInner, prevButton, nextButton);
                        cardcol4.append(carousel);

                        let cardcol8 = $('<div>').addClass('col-md-8');
                        let cardbody = $('<div>').addClass('card-body');
                        let title = $('<h3>').addClass('card-title fw-bold').text(data.portfolios[i]["name"]);
                        let cardtext = $('<div>').addClass('card-text').text(data.portfolios[i]["describe"]);
                        //cardfooter
                        let cardfooter = $('<div>');
                        //updateDate
                        let date = $('<span>').addClass('fs-6').text(data.portfolios[i]["date"]);
                        //tags
                        let tags = $('<ul>').addClass('d-flex flex-wrap gap-1 m-0 p-0');
                        data.portfolios[i]["tag"].forEach((tag)=>{
                            let taglist = $('<li>').addClass('fs-6 list-none').text("#"+tag);
                            tags.append(taglist);
                        })
                        cardfooter.append(date, tags);

                        //_blank icon
                        let linkicon = $('<i>').addClass('bi bi-box-arrow-up-right');
                        //link disabled if the data has "NONE" link
                        let link = $('<a>').addClass('btn btn-primary mt-1 me-2 '+(data.portfolios[i]["link"] === "NONE" ? 'disabled' : '')).text("造訪網頁").attr({
                            'href' : data.portfolios[i]["link"],
                            'target' : '_blank'
                        });
                        link.append(linkicon);
                        //_blank icon
                        let sourceicon = $('<i>').addClass('bi bi-box-arrow-up-right');
                        //source link
                        let sourceLink = $('<a>').addClass('btn btn-secondary mt-1 me-2').text("Source Code").attr({
                            'href' : data.portfolios[i]["source link"],
                            'target' : '_blank'
                        });
                        sourceLink.append(sourceicon);

                        cardbody.append(title, cardtext, cardfooter, link, sourceLink);
                        cardcol8.append(cardbody);
                        cardrow.append(cardcol4, cardcol8);
                        card.append(cardrow);
                        
                        $('.post').append(card);
                        
                        // 手動初始化輪播
                        new bootstrap.Carousel(document.querySelector('#' + carouselId), {
                            interval: 3000,
                            ride: 'carousel'
                        });
                    }
                });
            }
            //show search result
            $('.search-result').text("共"+sum+"筆結果");
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