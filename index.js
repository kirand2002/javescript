// console.log("hello world")
// let name='kiran'
// console.log(name)
// let firstName='kiru'
// let FirstName='king'
// console.log(firstName,FirstName)

// let interestrate = 0.3
// interestrate =1
// console.log(interestrate)

// const interestrate=0.2

// console.log(interestrate)

//types of premitive datatype

// let name='kiran'//string 
// let age=23//numbers
// let status=true//boolean
// let a//undefined
// let b=null//null
// let firstName='123'//symbol
// let lastName=123//symbol
// console.log(typeof(name))
// console.log(typeof(age))
// console.log(typeof(status))
// console.log(typeof(a))
// console.log(typeof(b))
// console.log(firstName==lastName)


//non premitive
// let pearson ={
//     name:'kiran',
//     age:30
// }
// console.log(pearson)

// //to access the person properties

// //1 dot notation

// pearson.name='kiru'
// console.log(pearson.name)

// //2 bracket notation
// pearson['age']=35
// console.log(pearson['age'])

// let selection = 'name'
// pearson[selection]='king'
// console.log(pearson[selection])


// let selectedColors=['red','blue','green',10]
// selectedColors[4]= 30
// console.log(selectedColors.length)

//functions

// function demo(name,lastName){
//     alert('ok')

//     console.log("hello world " + name + " "+ lastName)
// }
// lastName = prompt("enter your last name")
// demo('kiran',lastName)

//function for returing the value

// let a=function (num){
//     return num*num
// }
// let num = Number(prompt("enter the number to sqaure"))
// console.log(a(num))

// demo=(n)=>{
//     for(let i=0; i<n; i++)
//         console.log("hello world")
// }

// demo(5)

// demo=(n)=>{
//     if (n%400==0 || (n%4==0 && n%100!=0)) {
//         return true
//     } else {
//         return false
//     }
// }
// let st=2000
// let ed=2025

// console.log("leap years")
// for(let i=st;i<=ed; i++){
//     let ref=demo(i)
//     if (ref){
//         console.log(i)
//     }
// }

// console.log("non leap years")
// for( let i=st; i<=ed; i++)
// {
//     ref=demo(i)
//     if (ref==false){
//         console.log(i)
//     }
// }

// let name = "Kiran D";
// let age = 23;
// let status = true;

// document.getElementById("H").textContent = "My Profile";
// document.getElementById("p1").textContent = "My name is " + name 
// document.getElementById("p2").textContent = "My age is " + age;
// document.getElementById("p3").textContent = "My status is " + status;
function add(){
let a=Number(document.getElementById("val1").value)
let b=Number(document.getElementById("val2").value)
let c= a+b
document.getElementById("p1").innerHTML="sum is"+c
}
