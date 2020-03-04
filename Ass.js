var select1 = document.getElementById("cl1");
var select2= document.getElementById("cl2");
var text1 = document.getElementById("tb1");
var text2= document.getElementById("tb2");
var out1 = document.getElementById("out1");
var out2= document.getElementById("out2");

function makeCookies(){
console.log("creating cookie");

console.log("select1= "+select1);

createCookie("L1",select1.selectedIndex,0.5);
createCookie('L2',select2.selectedIndex,0.5);
createCookie("tb1",text1.innerHTML,0.5);
createCookie('tb2',text2.innerHTML,0.5);
createCookie("o1",out1.innerHTML,0.5);
createCookie('o2',out2.innerHTML,0.5);

}

function getCookieVals(){
console.log("getting cookies");


var Lang1= accessCookie("L1");
var Lang2= accessCookie("L2");
var tex1= accessCookie("tb1");
var tex2= accessCookie("tb2");
var ou1= accessCookie("o1");
var ou2= accessCookie("o2");


console.log("Lang1 = "+Lang1);
console.log("Lang2 = "+Lang2);

if(tex1!=""|| tex2!=""|| ou1!="" || ou2!="")
{
  
select1.selectedIndex = Lang1;
select2.selectedIndex = Lang2;
text1.innerHTML= tex1;
text2.innerHTML = tex2;
out1.innerHTML= ou1;
out2.innerHTML = ou2;
}
}

getCookieVals();

setInterval(makeCookies,5000);
