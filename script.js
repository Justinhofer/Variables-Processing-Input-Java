var wrapperEle = document.body.querySelector(".wrapper");
var fireattackEle = document.body.querySelector(".fireattack");
var iceattackEle = document.body.querySelector(".iceattack");
var poisonattackEle= document.body.querySelector(".poisonattack");
var numberEle = document.body.querySelector(".number");
var number=0;
numberEle.innerHTML=number;

var dragon = [
  {
    name:"Dragon",
    health :10,
  },
];

for (var i= 0; i < dragon.length; i++) {
  var ele = document.createElement("div");
  ele.innerHTML = dragon[i].name + " "+ dragon[i].health;
   ele.style.color = dragon[i].color; 
  
  if(dragon[i].health <10){
    ele.style.color="Black";
  }
}

function fireattack (num){
  number= number+num;
  numberEle.innerHTML=number;
}

function iceattack (num){
  number=number+num;
  numberEle.innerHTML=number;
}



fireattackEle.addEventListener("Click", function(){
  increase(3);
})

iceattack.addEventListener("Click", function(){
  increase(1);
})

poisonattack.addEventListner("Click", function(){
  increase(4);
})