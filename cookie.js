function createCookie(cookieName,cookieValue,daysToExpire)
        {
          var date = new Date();
          date.setTime(date.getTime()+(daysToExpire*24*60*60*1000));
          document.cookie = cookieName + "=" + cookieValue + "; expires=" + date.toUTCString() + ";path=/";
	console.log("Created"+ cookieName);
        }
function accessCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

let quesList = [];
var questions = ["You are required to enter a word that consists of  and  that denote the number of Zs and Os respectively. The input word is considered similar to word zoo if .<br />Determine if the entered word is similar to word zoo.<br />For example, words such as zzoooo and zzzoooooo are similar to word zoo but not the words such as zzooo and zzzooooo.<br />Input format<br />First line: <br />A word that starts with several Zs and continues by several Os.<br />Note: The maximum length of this word must be .<br />Output format<br />Print Yes if the input word can be considered as the string zoo otherwise, print No."];
questions.forEach(fun);
//var i=4;
const data;
async function set_Api() {
    const response = await fetch("URL.....");
    data = response.json();
    With_Api(data,0);
}
function With_Api(data,index) {
    var d= index.toString();
    document.getElementsByTagName("div")[3].setAttribute("id",d);
    document.getElementById(d).innerHTML = data.question[index];
}
set_Api();

function fun(item,index) {
    //element.setAttribute("id", value).innerHTML = item + "<br />";
    //document.getElementsByClassName("Ques")[index].setAttributes("id",index).innerHTML = item + "<br />";
    //document.getElementById("p1")[index].innerHTML = index + ":" + item + "<br />";
    var d= index.toString();
    document.getElementsByTagName("div")[3].setAttribute("id",d);
    //i=i+3;
    document.getElementById(d).innerHTML = item + "   " + index;
    //console.log(index + ' - ' + item);
}
