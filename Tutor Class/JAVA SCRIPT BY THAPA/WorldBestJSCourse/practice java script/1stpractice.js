// these method to convet a string in number
// (1) var num= +"10";
// console.log(num);
// console.log(typeof num);

// (2) var num= "10";
// console.log(num);
// console.log(typeof +num);

// (3) var num= "10";
// console.log(num);
// console.log(typeof Number(num));// here Number is constructor this method mostly used to convert to type of veriable we can convert string to number ,number to string , etc

// var name="raman";
// console.log(name);
// console.log(typeof name)

// var toybox=null;
// console.log(toybox);
// console.log(typeof toybox); 

// different between ver,let,const and why use
// var myName="Raman";
// myName="Mangal"
// console.log(myName);

// function modjs(myName){
//     if(myName){
//         var name="Raman";
//         var sname="thakur";
//         console.log("hello " +name+" "+sname);//[its concinatation]
//     }
// }
// modjs(true);

//  function modjs(MyName){
//     if(MyName){
//         var name="Raman";
//         var sname="thakur";
//     }
//     console.log("hello " +name+" "+sname);//[its concinatation]
// }
// modjs(true);

// const myName= "Raman";
// myName="mangal";
// console.log(myName);

// function modjs(MyName){
//     if(MyName){
//         let name="Raman";
//         const sname="thakur";
//         console.log("hello " +name+" "+sname);//[its concinatation]
//     }
// }
// modjs(true);

// function modjs(MyName){
//     if(MyName){
//         let name="Raman";
//         const sname="thakur";
//     }
//     console.log("hello " +name+" "+sname);//[its concinatation]
// }
// modjs(true);
// [ 
// var myName="raman";
// if(true){
//     var myName="mangal";
//     console.log(myName);
// }
// console.log(myName);

// let myName="raman";
// if(true){
//     let myName="mangal";
//     console.log(myName);
// }
// console.log(myName);

// its mean that var is function-scoped and  block-scoped its work in both.
// Iska matlab: if, for, while ke andar var se declare kiya gaya variable bahar se bhi accessible hota hai.
// and let is block scope so it not work as var ]

// var num="raamn"/2;
// console.log(num);

// var num=0.1+0.2;
// console.log(num.toFixed(2));
console.log(5==5);
console.log(4>3);
console.log(5==="5");