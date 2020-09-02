var Data = require("./data.json");

var date = new Date();

var minute = date.getMinutes().toString();
if (minute.length == 1) minute = "0" + minute;

var hour = date.getHours().toString();
if (hour.length == 1) hour = "0" + hour;

var nowtime = hour + minute;
var nowDay = Number(date.getDay())-1;

console.log("The time now is " + nowtime + " on weekDay " + String(Number(nowDay+1)));

var whatsubindex = 0;
for (var i = 0; i < Data[nowDay].length; i++) {
  if (Number(nowtime) >= Data[nowDay][i].start-4)
   whatsubindex++;
  else
   break;
}

var subject="none";
if (nowDay<=5 && whatsubindex<=Data[nowDay].length)
{
  subject = Data[nowDay][whatsubindex - 1].subject;
}
module.exports = subject;
