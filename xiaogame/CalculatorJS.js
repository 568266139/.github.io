    //定义开关，点击等于后重置输出的值
    var kg = 0;
    //获取输入值
    function onnclick(values) {
    var sum = document.getElementById("outputs");
    console.log("a" + kg);
    if (kg == "0") {
        console.log("c" + kg);
        if (sum.innerHTML !== "0") {
            sum.innerHTML += values.value;
        }
        else {
            sum.innerHTML = "";
            sum.innerHTML += values.value;
        }
    }
    else if(values.value=="+"||values.value=="-"||values.value=="*"||values.value=="/"){
        kg = 0;
        console.log("b" + kg);
        // sum.innerHTML = "";
        sum.innerHTML += values.value;
    }
    else{
        kg = 0;
        console.log("b" + kg);
        sum.innerHTML = "";
        sum.innerHTML += values.value;
    }
}
//    console.log(sum);
//计算值
function sultclick() {
    var sum = document.getElementById("outputs");
    //eval():通过计算 string 得到的值
    var num = eval(sum.innerHTML);
    sum.innerHTML = num;
    kg = 1;
    console.log(kg);
}
//清除键
function clears() {
    var sum = document.getElementById("outputs");
    console.log("dianji")
    sum.innerHTML = "0";
}
//退格键
function backspaces(){
    var sum=document.getElementById("outputs");
    //s=s.Substring(0,s.Length-1)删除最后一个字符串
    var num=sum.innerHTML.substring(0,sum.innerHTML.length-1);
           sum.innerHTML=num;
}
//百分号
function percentSign(){
    var sum=document.getElementById("outputs");
    var num=sum.innerHTML/100;
    sum.innerHTML=num;
    kg = 1;
}
//根号
function radical(){
    var sum=document.getElementById("outputs");
    var num= Math.sqrt(sum.innerHTML);
    sum.innerHTML=num;
    kg = 1;
}
// 分号
function semicolon(){
    var sum=document.getElementById("outputs");
    var num= 1/sum.innerHTML;
    sum.innerHTML=num;
    kg = 1;
}
