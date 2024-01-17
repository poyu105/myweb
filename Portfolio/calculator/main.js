var src=0;
var inputStack=[];//用於輸入陣列
var srcStack=[];//用於即時顯示
var calQueue=[0];//用於計算陣列
var queueCt=0;//sortQueue()的calQueue[]計數器

function sortQueue(length, queue){
    calQueue[queueCt]=[0];
    for(i=0;i<length;i++){
        if(!isNaN(queue[i])){      //isNaN() 判斷是否為非數字 是數字=>false, 非數字=>true
            console.log("判斷是否為數字:"+!isNaN(queue[i]));
            console.log("第"+i+"次:");
            console.log("前calQueue值:"+calQueue[queueCt]);
            console.log("calQueue"+queueCt+"="+calQueue[queueCt]+"x10"+"+"+queue[i]);
            calQueue[queueCt]=(calQueue[queueCt]*10)+queue[i];
            
            
            console.log("後calQueue值:"+calQueue[queueCt]);
        }
        else if(queue[i]=='='){
            cal();
            break;
        }
        else{
            console.log("判斷是否為數字:"+!isNaN(queue[i]));
            queueCt++;
            console.log("queueCt++ = "+queueCt);
            //document.getElementById("cal-src").innerHTML=calQueue[queueCt];
            calQueue[queueCt]=queue[i];
            console.log("後calQueue值:"+calQueue[queueCt]);
        }
        console.log("全calQueue值:"+calQueue);
    }
    queueCt++;
    inputStack=[];
}

function pushElements(p){
    inputStack.push(p);
    srcStack.push(p);
    if(isNaN(p)){   //判斷到非數字時執行
        sortQueue(inputStack.length,inputStack);
    }
}

function show(){    //.join("")陣列不顯示"，"
    //document.getElementById("cal-src").innerHTML=inputStack.join(""); //Error
    //document.getElementById("cal-src").innerHTML=calQueue.join("");   //非同步，因會清空inputStack
    document.getElementById("cal-src").innerHTML=srcStack.join(""); //用顯示陣列同步
}

function cal(){
    var sum;
    for(i=0;i<calQueue.length;i++){
        switch(calQueue[i]){
            case('+'):
                sum+=calQueue[i+1];
                i++;
                break;
            case('-'):
                sum-=calQueue[i+1];
                i++;
                break;
            case('x'):
                sum*=calQueue[i+1];
                i++;
                break;
            case('÷'):
                sum/=calQueue[i+1];
                i++;
                break;
            default:
                sum=calQueue[i];
                break;
        }
    }
    document.getElementById("cal-src").innerHTML=sum.toFixed(3);
    inputStack=[0];
    queueCt=0;
    calQueue[queueCt]=0;
    srcStack=[0];
}