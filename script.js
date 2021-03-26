var billEle = document.body.querySelector(".bill");
var taxEle = document.body.querySelector(".tax");
var billvalueEle = document.body.querySelector(".billvalue");
var tipEle = document.body.querySelector(".tip");
var finalEle = document.body.querySelector(".final");



var billPrompt = Number(prompt("How much is your bill?"));
var taxPrompt = Number(0.07);
var tipPrompt = Number(0.05);

var billvalue = billPrompt * taxPrompt + billPrompt;
var final = billPrompt * tipPrompt + billvalue;

billvalueEle.innerHTML = "The bill with sales tax is " + billvalue;
finalEle.innerHTML = "The final bill with the tip is " + final;