

function makeCookies(){
console.log("creating cookie");

var select1 = document.getElementById("cl1").value;
var select2= document.getElementById("cl2").value;
var text1 = document.getElementById("tb1").innerText;
var text2= document.getElementById("tb2").innerText;
var out1 = document.getElementById("out1").innerText;
var out2= document.getElementById("out2").innerText;

console.log("select1= "+select1);

createCookie("L1",select1,0.5);
createCookie('L2',select2,0.5);
createCookie("tb1",text1,0.5);
createCookie('tb2',text2,0.5);
createCookie("o1",out1,0.5);
createCookie('o2',out2,0.5);

}

function getCookieVals(){
console.log("getting cookies");


var Lang1= accessCookie("L1");
var Lang2= accessCookie("L2");
var text1= accessCookie("tb1");
var text2= accessCookie("tb2");
var out1= accessCookie("o1");
var out2= accessCookie("o2");


console.log("Lang1 = "+Lang1);
console.log("Lang2 = "+Lang2);

if(text1!=""||text2!="")
{

var select1 = document.getElementById("cl1");
var select2= document.getElementById("cl2");
var textbox1 = document.getElementById("tb1");
var textbox2= document.getElementById("tb2");
var outbox1 = document.getElementById("out1");
var outbox2= document.getElementById("out2");

select1.value = Lang1;
select2.value = Lang2;
textbox1.innerHTML= text1;
textbox2.innerHTML = text2;
outbox1.innerHTML= out1;
outbox2.innerHTML = out2;
}
}

getCookieVals();

setInterval(makeCookies,5000);