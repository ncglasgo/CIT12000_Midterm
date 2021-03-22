var wrap = document.body.querySelector(".wrap");

var x = document.body.querySelector(".butt");
x.addEventListener("click", SecondFunction);
var ele = document.createElement("div");
var numEle = document.createElement("div");
var totaldamage= 5;
var damage1 = 0;

function Function(){
  var list = [
  {
    name: "Harry",
    age: 25
  },
  {
    name: "Larry",
    age: 15
  },
  {
    name: "Bert",
    age: 45
  },
  {
    name: "Jerry",
    age: 35
  },
  {
    name: "Berry",
    age: 5
  },
  {
    name: "Bart",
    age: 55
  }
];
  
for (var i=0; i < list.length; i++) {
 ele = document.createElement("div");
 var nameEle = document.createElement("h2");
 var ageEle = document.createElement("h3");
 nameEle.innerHTML = "Name: " + list[i].name;
 ageEle.innerHTML = "Age: " + list[i].age;
 ele.appendChild(nameEle);
 ele.appendChild(ageEle);
 if (list[i].age > 25) {
 ele.style.color = "green" 
 };
 wrap.appendChild(ele);
}}

function SecondFunction() {
   damage1 = 1;
    add(damage1);
} 

function add(damage1){
  totaldamage= totaldamage + damage1;
  numEle.innerHTML = "Increase this number by one!----> " + totaldamage;
}

function ThirdFunction(){
 ele = document.createElement("div");
 numEle = document.createElement("div");
 ele.appendChild(numEle);
 numEle.innerHTML = "Increase this number by one!----> " + totaldamage;
 wrap.appendChild(ele);
}
Function()
ThirdFunction()