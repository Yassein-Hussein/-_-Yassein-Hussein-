var x = 0;
var z = 0;
document.getElementById("btn").onclick = function(){
    document.getElementById("count").innerHTML = ++x;
    document.getElementById("num").innerHTML = ++z;
    if(z >= 100){
        document.getElementById("num").innerHTML = "لقد اتممت 100 تسبيحه";
    };
    if(z >= 200){
        document.getElementById("num").innerHTML = "لقد اتممت 200 تسبيحه";
    };
    if(z >= 300){
        document.getElementById("num").innerHTML = "لقد اتممت 300 تسبيحه";
    };
    if(z >= 400){
        document.getElementById("num").innerHTML = "لقد اتممت 400 تسبيحه";
    };
    if(z >= 500){
        document.getElementById("num").innerHTML = "لقد اتممت 500 تسبيحه";
    };
    if(z >= 600){
        document.getElementById("num").innerHTML = "لقد اتممت 600 تسبيحه";
    };
    if(z >= 700){
        document.getElementById("num").innerHTML = "لقد اتممت 700 تسبيحه";
    };
    if(z >= 800){
        document.getElementById("num").innerHTML = "لقد اتممت 800 تسبيحه";
    };
    if(z >= 900){
        document.getElementById("num").innerHTML = "لقد اتممت 900 تسبيحه";
    };
    if(z >= 1000){
        document.getElementById("num").innerHTML = "لقد اتممت 1000 تسبيحه";
    };
};
// document.getElementById("num").onclick = function(){
// }
