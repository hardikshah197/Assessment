


function makeCookies(){
console.log("creating cookie");

var select1 = document.getElementById("cl1").value;
var select2= document.getElementById("cl2").value;

console.log("select1= "+select1);
createCookie("L1",select1,0.5);
createCookie('L2',select2,0.5);

getCookieVals();
}

function getCookieVals(){
console.log("getting cookies");
//var Lang1= document.cookie;
var Lang1= accessCookie("L1");
var Lang2= accessCookie("L2");

console.log("Lang1 = "+Lang1);
//if(Lang1!="")
console.log("Lang2 = "+Lang2);
}

getCookieVals();

setInterval(makeCookies,5000);