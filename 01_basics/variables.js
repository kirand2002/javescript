// // const accountId =123
// // let accountEmail = "kiran@gmail.com"
// // var accountPassword = "12344"
// // accountcity = "jaipur"
// // var name;//variable initialized without value is know as undifined


// //accountId=1224//not allowed to chage const variables in js

// // console.log(accountId)

// // accountEmail="you@email.com"
// // accountPassword=12345
// // accountcity="blg"

// // console.table([name,accountEmail,accountId,accountPassword,accountcity])

// // /*note : 
// // prefer do not  use var
// // because of issue of block scope and fuctional scope
// // */

// // "use strict";//treat all js code as newer version

// // //alert(3+3) // we are using node.js , not browser so it not work

// //  console.log(3+3)
// //  console.log("kiran")

// //  //documntation



// // //js follows escmascript 8 specification

// // //userfriendly documentation is mdn and tc39

// // let nmes ="kiran" //string
// // let age=23
// // let status= false

// // //datatypes

// // // premtive datatypes

// // //number
// // //bigint
// // //string =>
// // //boolean=>true/false
// // //null => standalone value
// // // undefined =>
// // //symbol =>to find uniqueness


// // //non premtive datatypes

// // //objects
// // //arrays
// // //functions


// // console.log(typeof undefined)//undefined
// // console.log(typeof null)//object

// // //conversion

// // let score ="33abc"

// // let score1=Number(score)

// // console.log(typeof score1)
// // console.log(score1)

// // //type conversion (Number)
// // // "33" => 33
// // //"33abc"=> NaN (not a number)
// // // true => 1 or False => 0
// // //undefined => NaN
// // //null => 0
// // // symbol => NaN


// // // using bolean
// // //0=>false or 1=>true
// // //""=> false or "kiran" => true


// // // let a=3
// // // console.log(Boolean(a))


// // --------------oprations-----------------

// let value = 3
// let negValue = -value
// //console.log(negValue)

// // console.log('3'<1);

// let name1 = "kiran"
// let age1 = 23
// console.log(`my name is ${name1.toUpperCase()} and my age is ${age1}`)

const name = new String('kiran')
// console.log(name)
// // console.log(name[0])
// console.log(name.__proto__);

let sub = name.substring(0,3)
// console.log(sub)

console.log(name.slice(-2,2))