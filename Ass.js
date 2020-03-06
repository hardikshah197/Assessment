openNav();

var select1 = document.getElementById("cl1");
var select2 = document.getElementById("cl2");
var text1 = document.getElementById("tb1");
var text2 = document.getElementById("tb2");
var out1 = document.getElementById("out1");
var out2 = document.getElementById("out2");

function makeCookies() {
  createCookie("L1", select1.selectedIndex, 0.5);
  createCookie("L2", select2.selectedIndex, 0.5);
  createCookie("tb1", text1.value, 0.5);
  createCookie("tb2", text2.value, 0.5);
  createCookie("o1", out1.value, 0.5);
  createCookie("o2", out2.value, 0.5);
}

function getCookieVals() {
  console.log("getting cookies");

  var Lang1 = accessCookie("L1");
  var Lang2 = accessCookie("L2");
  var tex1 = accessCookie("tb1");
  var tex2 = accessCookie("tb2");
  var ou1 = accessCookie("o1");
  var ou2 = accessCookie("o2");

  console.log("Text1 = " + tex1);
  console.log("Output1 = " + ou1);

  select1.selectedIndex = Lang1;
  select2.selectedIndex = Lang2;
  text1.innerText = tex1;
  text2.innnerText = tex2;
  out1.innerText = ou1;
  out2.innerText = ou2;
}

function handleChange(ele) {
  console.log(ele.value);
}

getCookieVals();
