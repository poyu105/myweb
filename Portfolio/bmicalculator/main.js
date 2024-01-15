function computingBmi(){
    var objheight=document.getElementById("height")
    var objweight=document.getElementById("weight")
    var height=parseFloat(objheight.value);
    var weight=parseFloat(objweight.value);

    var bmi=weight/((height/100)*(height/100));
    var result;

    if(bmi<18.5){
        result="體重過輕"
    }
    if(18.5<=bmi&&bmi<24){
        result="正常範圍"
    }
    if(24<=bmi&&bmi<27){
        result="異常範圍: 過重!"
    }
    if(27<=bmi&&bmi<30){
        result="異常範圍: 輕度肥胖!"
    }
    if(30<=bmi&&bmi<35){
        result="異常範圍: 中度肥胖!"
    }
    if(35<=bmi){
        result="異常範圍: 重度肥胖!"
    }
    document.getElementById('bmiValue').innerHTML="&emsp;"+bmi.toFixed(3)+"&emsp;"+result;
}