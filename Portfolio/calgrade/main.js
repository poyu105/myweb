$(document).ready(function () {
    $("button#selectbtn").click(function () { 
        $(this).next("#hideInfo").slideToggle();
    });
    $("button#totalAvg").click(function () {
        calAvg();  
    });
    $('button#pertermAvg').click(function (){
        calTermAvg();
    });
    $('button#high-lowscore').click(function () { 
        findgrade();        
    });
});

function calAvg(){
    var sum=0;
    $('#hideInfo input[type="number"]').each(function (){
        sum+= parseFloat($(this).val()) || 0;
    });
    var avg=sum/($('#hideInfo input[type="number"]')).length;
    $('#showresult').text("總平均: "+avg.toFixed(2));
}

function calTermAvg(){
    var sum10401=0;
    var sum10402=0;
    var sum10501=0;
    var sum10502=0;
    $('input#S10401').each(function (){
        sum10401+=parseFloat($(this).val()) || 0;
    });
    $('input#S10402').each(function (){
        sum10402+=parseFloat($(this).val()) || 0;
    });
    $('input#S10501').each(function (){
        sum10501+=parseFloat($(this).val()) || 0;
    });
    $('input#S10502').each(function (){
        sum10502+=parseFloat($(this).val()) || 0;
    });
    var avg10401=parseFloat(sum10401/($('.IS10401 input[type="number"]')).length);
    var avg10402=parseFloat(sum10402/($('.IS10402 input[type="number"]')).length);
    var avg10501=parseFloat(sum10501/($('.IS10501 input[type="number"]')).length);
    var avg10502=parseFloat(sum10502/($('.IS10502 input[type="number"]')).length);
    $('#showresult').html("104第1學期平均: "+avg10401.toFixed(2)+"<br>104第2學期平均: "+avg10402.toFixed(2)+"<br>105第1學期平均: "+avg10501.toFixed(2)+"<br>105第2學期平均: "+avg10502.toFixed(2));
}

function findgrade(){
    var datas=[];
    $('#hideInfo input[type="number"]').each(function (){
        var grade=parseFloat($(this).val()) || 0;
        var subject=$(this).attr('id').substring(6);
        switch(subject){
            case 'A':
                subject="計概";
                break;
            case 'B':
                subject="微積分";
                break;
            case 'C':
                subject="Java程式語言";
                break;
            case 'D':
                subject="資訊入門";
                break;
            default:
                break;   
        }
        console.log(grade);
        datas.push({
            semester: $(this).attr('id').substring(0,6),
            subject: subject,
            grade:grade
        });
    });
   
    var maxGrade = Math.max.apply(null, datas.map(function(grade){return grade.grade}));
    var minGrade = Math.min.apply(null, datas.map(function(grade){return grade.grade}));
    var maxGradeInfo = datas.find(function(grade) { return grade.grade === maxGrade; });
    var minGradeInfo = datas.find(function(grade) { return grade.grade === minGrade; });
    $('#showresult').html("<strong>最高成績:</strong> <br>"+maxGradeInfo.semester.substring(1,4)+"學年度第"+maxGradeInfo.semester.substring(5)+"學期，"+maxGradeInfo.subject+": "+maxGrade+"<br><strong>最低成績:</strong> <br>"+minGradeInfo.semester.substring(1,4)+"學年度第"+minGradeInfo.semester.substring(5)+"學期，"+minGradeInfo.subject+": "+minGrade);
    
}