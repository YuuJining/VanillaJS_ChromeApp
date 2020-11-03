const title = document.querySelector("#title");
console.log(title);
title.style.color="red";
title.innerHTML=("Yujinnn");
document.title="I own you now";

// 변수 선언 시에는 첫 사용에 const, 진짜 필요할 때만 let쓰기
/*
 const what = "Yujin"; String
 const wat = true; Boolean
 const wat = 666; Number
 const wat = 55.1; Float

 const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri"];
 


 //Object
 const yujinInfo = {
     name:"Yujin",
     age:"23",
     gender:"Female",
     isPretty:"true",
     favMovies:["신과함께","7번방의 선물"],
     favFood:[{name:"Kimchi", fatty:false}, {
         name:"CheeseBurger", fatty:true
     }]
 }



 //function
 function sayHello (name, age) {
     console.log('Hello!'+name,+" you have ",age+" years of age.");
 }

 sayHello("Yujin",23);


 --
 function sayHello(name, age) {
     return `Hello ${name} you are ${age} years old`;
 }

 const greetYujin = sayHello("Yujin",23)
 console.log(greetYujin);
 --
 

 const calculator = {
     plus: function(a,b) {
         return a+b;
     }
 }

 const plus = calculator.plus(5,5)
 console.log(plus) => 10출력
 console은 object임
 */