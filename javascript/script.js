// // console.log(`hello world`);
// // document.getElementById("myH").textContent = "Hello World!";
// // document.getElementById("myP").textContent = "This is a paragraph.";
// // let x=10;
// // let age=20;
// // let isadult=true;

// // let name="Kunal Kushwaha"
// // let email="Kunal1806@gmail.com"
// // console.log(typeof name)
// // console.log(`you are ${age} years old`);
// // console.log(`My name is ${name}.`)
// // console.log(`My email is ${email}.`);
// // console.log(`Is adult: ${isadult}`);
// // console.log(typeof isadult);
// let name="Kunal Kushwaha";
// let age=20;
// let isadult=true;
// document.getElementById("name").textContent = `My name is ${name}`;
// document.getElementById("age").textContent = `I am ${age} years old`;
// document.getElementById("valid").textContent = `Is adult: ${isadult}`;

//operators are saame as the python 
// let username;
// username=window.prompt("Enter your name: ");
// console.log(username);
//window prompt


// let name;
// document.getElementById("sumbit").onclick= funtion(){
//     name=document.getElementById("n").value;
//     document.getElementById("header").textContent=`Hello ${name}`;
// }


// const PI=3.14159;
// let radius;
// let circumference;
// document.getElementById("calculateButton").onclick= function(){
//     radius=document.getElementById("inputRadius").value;
//     radius=Number(radius);
//     circumference=2*PI*radius;
//     document.getElementById("result").textContent=`Circumference of circle is ${circumference}`;
// }


// const decreasebtn=document.getElementById("dbtn1");
// const increasebtn=document.getElementById("ibtn3");
// const resetbtn=document.getElementById("rbtn2");
// const countlabel=document.getElementById("countlabel");
// let count=0;
// decreasebtn.onclick=function(){
//     count--;
//     countlabel.textContent=`Count: ${count}`;
// }
// increasebtn.onclick=function(){
//     count++;
//     countlabel.textContent=`Count: ${count}`;
// }
// resetbtn.onclick=function(){
//     count=0;
//     countlabel.textContent=`Count: ${count}`;
// }

// console.log(Math.PI);
// let x=1.0246874;
// let y=2.9691;
// console.log(Math.round(x)); //1
// console.log(Math.floor(y));
// console.log(Math.ceil(y));
// console.log(Math.pow(x,y));
// console.log(Math.sqrt(x));
// console.log(Math.abs(-x));
// console.log(Math.sin(x));
// console.log(Math.cos(x));
// console.log(Math.max(y,x));
// console.log(Math.min(y,x));
// console.log(Math.random()); //0-1


// let random=Math.floor(Math.random()*6)+1;
// console.log(random);
// //random number between 1 and 6

// let max=50;
// let min=1;
// let random2=Math.floor(Math.random()*(max-min+1))+min;
// console.log(random2);


// const btn=document.getElementById("dice");
// const result=document.getElementById("result");
// const max=6;
// const min=1;
// btn.onclick=function(){
//     let random=Math.floor(Math.random()*(max-min+1))+min;
//     result.textContent=`You rolled a ${random}`;
//     console.log(random);
// }

// let age=window.prompt("Enter your age: ");
// age=Number(age);
// if(age>=18){
//     console.log("You are an adult");
// }
// else if(age>=13 && age<18){
//     console.log("You are a teenager");
// }
// else{
//     console.log("You are a child");
// }
 