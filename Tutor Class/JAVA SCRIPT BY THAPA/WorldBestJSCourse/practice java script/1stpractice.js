// these method to convet a string in number

// var num="5"-3;
// console.log(num);
// console.log(typeof num);

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

// console.log(5==5);

// console.log(4>3);

// console.log(5==="5");
// its base on normal compraison opretors

// console.log(2<10<5);
//yaha comprision is prakar hai 2 10 se less hai its mean ye true ho gya or true ki value 1 hoti hai then 1<5 ho gyi its mean output true ayega  

// [logical opraters
// == vs === ka farq:
// var num1=1;
// var num2="1";
// if(num1==num2){
//     console.log("equal");
// }else{
//     console.log("not equal")
// }

// == (Double Equals) — Loose Comparison
// Yeh type conversion karta hai.

// Agar num1 = 1 (number) aur num2 = "1" (string) hai, toh JavaScript string ko number mein convert karega.

// Dono values same lagti hain after conversion → Output: "equal"

// var num1=1;
// var num2="1";
// if(num1===num2){
//     console.log("equal");
// }else{
//     console.log("not equal");
// }
// === (Triple Equals) — Strict Comparison
// Yeh type bhi check karta hai, sirf value nahi.

// num1 = 1 (number) aur num2 = "1" (string) → Types alag hain.

// Isliye comparison fail ho jata hai → Output: "not equal"

//And logic 

// var x=10;
// var y=5;
// console.log(x>0 && y>0)

// var x=10;
// var y=20;
// if(x>y && y>10){
//     console.log("yes yes yes");
// }
// else{
//     console.log("no no no");
// }

//or logic

// var x=10;
// var y=5;
// console.log(x>0 || y>0)

// var x=10;
// var y=20;
// if(x>y || y>10){
//     console.log("yes yes yes");
// }
// else{
//     console.log("no no no");
// }

//not logic
// it is special example
// var x=10;
// console.log(! x>0);

// !x → !10 → false (kyunki 10 is truthy, so ! makes it false)

// false > 0 → false ko number mein convert karo → 0 > 0 → false

// ✅ Output: false

// var x = 10;
// console.log(!x < 0);
// Step-by-step:
// !x → !10 → false

// false < 0 → 0 < 0 → false

// ✅ Output: false

// var x=10;
// console.log(!(x>0));
// console.log(!(x<0));]

// [ternnary opretors**********************

// var age=15;
// var criteriya= age>=18 ? "he is ilegible for drivining":" he is not elegible for drivining";//isme pehle condtion di fir agar condition true ho gyi to ? ke bbad ka sentance print hoa agar condition true nhi hai to : ke baad ka sentance print haga
// console.log(criteriya);

// var name="raman"
// var score=32;
// var student= score>=32? "pass":"fail"
// console.log(name+" is "+student);

// var name="aman"
// var score=22;
// var student= score>=32? "pass":"fail"
// console.log(name+" is "+student);
//]is opretor ko if else ki jagah use kar skate hai

//  var age=19;
//  var registervote=true;
//  var citizen=false;
//  if(age>=18 && registervote==true && citizen==true){
//     console.log("they are elegible to voting");
//  }
//  else if(registervote){
//     console.log("they are not eligible due to registration status");

//  }
//  else if(citizen) {
//     console.log("they are not eligible due to citizenship status");
//  }
//  else{
//     console.log("they are not eligible to vote");
//  }
 
 // Tere paas ek e-commerce site hai jo Diwali ke time pe discount de rahi hai. Har user ko check karna hai ki wo discount ke liye eligible hai ya nahi based on these conditions:

// ✅ Eligibility Rules:
// Age ≥ 21 hona chahiye

// Indian resident hona chahiye

// Festival coupon code apply kiya ho

// 🧪 Output Messages:
// Agar age < 21 → "❌ You are eligible for Diwali discount!"

// Agar resident nahi hai → "❌ You are not eligible (Non-Indian resident)"

// Agar coupon apply nahi kiya → "❌ You are not eligible (No coupon applied)"

// Agar sab sahi hai → "✅ You are eligible for Diwali discount!"

// var age=41;
// var indianResidence=false;
// var couponApply=true;
// if(age>=21){
//   if(indianResidence){
//     if(couponApply){
//   console.log("You are eligible for Diwali discount!");
//   }
//   else{
//   console.log("You are not eligible (No coupon applied)");
//   }
// }
// else{
//   console.log("You are not eligible (Non-Indian resident)");
// }
// }
// else{
//   console.log("You are not eligible for Diwali discount!");
// }
// (1)-------------------------------------------------------------------------------------------------
// var legs=1;
// var wing=false;
// var isVocal=true;
// var isTell= false;
// if (legs>=4 && wing){
//    console.log("this is insect ");
// }
// else if((legs>=2 && legs<=4) && wing){ 
//    console.log("this is bird");
// }
// else if(legs==2 && isVocal){
//    console.log("this is human");
// }
// else if((isVocal && isTell) && legs==4){
//    console.log("this is animal");
// }
// else{
//    console.log("this is not exist on earth");
// }

// (2)---------------------------------------------------------------------------------------------------
// switch statement example
// var planetsSizeredius=6800;
// switch(true){
//    case (planetsSizeredius==4879):
//       console.log("Mercury Smallest planet; closest to the Sun");
//       break;
//    case (planetsSizeredius>= 4879 && planetsSizeredius<=6792):
//       console.log("Mars Known as the Red Planet");
//       break;
//    case (planetsSizeredius>=6792 && planetsSizeredius<=12104):
//       console.log("Venus Similar size to Earth");
//       break;
//    default:
//       console.log("this planet not exist in solar system");
// }
// ------------------------------------------------------------------------------------------------------------------------------
// var myName="raman";
// switch(myName){
//   case "raman":
//     console.log("his name is raman");
//     break
//   case "aman":
//     console.log("his name is aman");
//     break
//     default:
//       console.log("no match");
// }

// var citizen=false;
// var registration=true;
// var age=18;
// switch(false){
//   case(citizen==true && registration==true && age>=18):
//     console.log("he is elegible for voting");
//     break
//   case(citizen !=true ||registration !=true ||age<18):
//     console.log("he is not elegible for voting");
//     break
//   default:
//     console.log("he is not human");
// }
// (3)--------------------------------------------------------------------------------------------------------
// var structureType="bridge";
// var piler=4;
//  switch(structureType){
//    case"bridge":
//  }

// Define construction site type
// 

// -------------------------------------------------------------------------------------
// var num=3;
// while(num<=10){
//   console.log(num);
//   num++;
// }

// --------------------------------------------------------------------------------------------

// var i = 1;
// var sum = 0;
// var multi=1;
// while(i <= 10){//ye condition tab tak chalegi jab tak condtion false nhi ho jati jese yaha jab i ki value 10 se jada
//   // console.log("5into"+i +"=" +i*5);
//   console.log(`5 into ${i} = ${5*i}`);
//   sum = sum + (i*5);   // loop ke andar ka main kaam
//   multi= multi*(i*5);
//   i++;
// }

// console.log("Total Sum = " + sum);
// console.log("multyply = " + multi)

// ---------------------------------------------------------------------------------------------------
// most important interviwe
// console.log(0.1+0.2==0.3);
// console.log(Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON);
// // true
// console.log((0.1 + 0.2).toFixed(1) == 0.3); 
// // true
// console.log((0.1+ 0.2).toFixed(3));
// console.log(0.2+0.3);

// --------------------------------------------------------------------------------------------------------
// var password;
// var postiveNumber;
// debugger;
// do{
//   password= prompt ("enter a postive number");
//   postiveNumber=parseFloat(password); 
// }
// while(isNaN(postiveNumber)|| postiveNumber<0);
// console.log(postiveNumber);
// ------------------------------------------------------------------------------------------------------------
// var sum=0;
// debugger;
// for(num = 1; num <=10; num++)
//   {console.log(num);
//      var sum=sum+num;
//     // console.log(sum);
// }
// console.log(sum);
// ----------------------------------------------------------------------------------------------------------------------------
// for(var num=1; num<=10;num++){
//  console.log(num*8);
// }
// --------------------------------------------------------------------------------------------------------------------------------------

// var num=12;
// var isPrime=true;
// debugger
// for(i=2;i<num; i++){
//   if (num%i===0){
//     isPrime=false;
//     break
//   }
// }
//  if (isPrime){
//   console.log("num is prime");
//  }
//  else{
//   console.log("num is not prime");
//  }
// ---------------------------------------------------------------------------------------
// var num=12;
// var isPrime=true;
// debugger
// for(i=2;i<num; i++){
//   if (num%i===0){
//     console.log("num is not prime");
//     isPrime=false;
//     break
//   }
// }
//  if (isPrime){
//   console.log("num is prime");
//  }
// -------------------------------------------------------------------------------
// for (var i = 1; i <= 5; i++) {
//   var pattern = "";
//   for (var j = 1; j <= i; j++) {
//     pattern = pattern +j;
//   }
//   console.log(pattern);
// }
// -----------------------------------------------------------------------------------------------------
// 
// var rows = 5;  // kitni lines print karni hain

// for (var i = 1; i <= rows; i++) {
//   var pattern = "";

//   // 1️⃣ Spaces print karna (rows - i)
//   for (var space = 1; space <= rows - i; space++) {
//     pattern = pattern + " ";
//   }

//   // 2️⃣ Stars print karna (2*i - 1)
//   for (var star = 1; star <= (2 * i - 1); star++) {
//     pattern = pattern + "*";
//   }

//   console.log(pattern);
// }
// ----------------------------------------------------------------------------------------
// for(i=1; i<=5;i++){
//   var space="";
//   for(j=1; j<=5-i; j++){
//   space=space+" ";
// }
// for (k=1;k<=i;k++){
//   space=space+"*";
//  }
//  console.log(space);
// }
// ----------------------------------------------------function***************************************** -------------------

// function sum(a,b){
//   console.log(a+b);
// }
// console.log(sum(4,2));
// console.log(sum(3,2));
// console.log(sum(2,2))
// ---------------------------------------------------------------------------------------
// function sum(a,b){//function ko define karna then perameter //
//   return a+b;}

// console.log(sum(4,2));
// console.log(sum(3,2));
// console.log(sum(2,2))

// ---------------------------------------------------------------------its called function invocation
// function file(){//itwork
//   console.log("raman");
// }
// file();
// -----------------------------******************
// function file(r){//it not work
//   return raman;
// }
// file("");
// ---------------------------------------------------------------------its called anonimous function---------
// var kon=function(a){
//   console.log("hello "+a+" welcome my house");
// }
// kon("raman");
// kon("mangal");
// kon("ghar jaa aa rhu mangal");
// --------------------------------------------------------------------- its called run function without called----------
// (function(get){
//    console.log("KON HAI "+ get);
// })("RAMAN");//is code mai function ko call nhi kiya gya 



// [ ---------------------------------------------------------------------------ecmascript rule--------------
// if(true){                                                                                    
//   let name="raman";                                                                
//   console.log(name);
// }
// -------------------------------------------------------------------------------
// var name= "thakur"
// if(true){
//   let name="raman";
//   console.log(name);
// }
// console.log(name);
// ]these example for why use let,const place of var


//-------------------------------------------------------------------------------fat areo function-----------
// let sum = (a,b)=> console.log(`the sum of ${a} and ${b} is ${a+b};`)
// sum(5,5)//means fat areo function mai function key word ka use na karke variable declare karne ke liye let ya const  ka use karte hai then function name ke baad = use karte hai fir perameter usi tarah dete hai then => ka use karte hai and jab code ek line me likh rhe hot {} ka bhi use nhi karna padta but agar ek like me nhi likh rhe to {} use karna padta hai or na hi return keyword ki jarurat padti hai

// ----------------------------------------------------------------------------------------------------------------------
// make a calculater to call to opretor
// ------------------------------------------(1) method
// function calculater(num1,num2,oprator){ 
//   switch(oprator){
//     case "+":
//       return num1+num2;
//     case "-":
//       return num1-num2;
//     case "%":
//       return num1%num2;
//     case "/":
//       return num1/num2;
//     default:
//       return "not found opretor";
//   }
// }
// console.log(calculater(5,2,"-"))
// console.log(calculater(10,5,"+"))
// console.log(calculater(5,2,"%"))
// console.log(calculater(5,2,"*"))
// console.log(calculater(17,2,"/"))

// --------------------------------(2) method------------------
// function calculater(num1,num2,oprator){ 
//   let result;
//   switch(oprator){
//     case "+":
//       result=num1+num2;
//       return result;
//     case "-":
//       result= num1-num2;
//       return result;
//     case "%":
//       result= num1%num2;
//       return result;
//     case "/":
//       result=num1/num2;
//       return result;
//     default:
//       result= "not found opretor";
//       return result;
//   }
// }
// console.log(calculater(5,2,"-"))
// console.log(calculater(5,2,"-"))
// console.log(calculater(10,5,"+"))
// console.log(calculater(5,2,"%"))
// console.log(calculater(5,2,"*"))

// ---------------------------------------------------(3) method
// by fat arreo function

//  let calculater=(num1,num2,oprator)=>{ 
//   switch(oprator){
//     case "+":
//       return num1+num2;
//     case "-":
//       return num1-num2;
//     case "%":
//       return num1%num2;
//     case "/":
//       return num1/num2;
//     default:
//       return "not found opretor";
//   }
// }
// console.log(calculater(5,2,"-"))
// console.log(calculater(10,5,"+"))
// console.log(calculater(5,2,"%"))
// console.log(calculater(5,2,"*"))


// --------------------------------------------------example of fat errow function and call by console.log with function name-----------------------
// let calculater=a=>{ return a*a;}
// console.log(calculater(2))\
// // -------------------------------------------------------------example of fat errow function and call by function name-----------
// let calculater=a=>{ console.log( a*a);}
// calculater(2)



// ----------------------------------------------------------------------loop use in function ------------------------
// let reverseName=(name)=>{
//   let store='';
//   for( i=name.length-1 ; i>=0;i--){
//       store=store+(name[i]);
// }
//  console.log(store);
// }
// reverseName("raman kumar");


// ---------------------------------------------------------------these are example of loop and function---------------------------------------

// let n=18
// let table=(num)=>{

//   for( i=1;i<=10;i++){
//     console.log(i+"*"+num+"="+(i*num));
//   }
  
//  function sum (a,b){
//   console.log(a+b);
//  }
//  sum(4,4);

// function sum (a,b){
//   return(a+b);
//  }
//  console.log(sum(4,4));
//  let sum =(a,b)=>{
//   return a+b;
//  }
//  console.log(sum(4,4));

// let sum=function(a,b){
//   console.log(a+b);
// }
// sum(2,2);
//  (function(a,b){
//   console.log(a+b);
//  })(4,4);


// ---------------------------------------------------------------Array-------------------------------------------------

// }
// let name=["raman","mangal","aman","vimal"];
// console.log(name[3]);
// console.log(name[-4]);//is se negative index nhi pata kar sakte hai negative index pata karne ke liye [] ki jagah .at() use karna padta hai and variable name.at se postive number ki index and negative number ki index number pata kar sakte hai but [] se negative index number pata nhi kar sakte hai 
// console.log(name.length);
// console.log(name.at(1))
// console.log(name.at(-1))
// ----------------------------------------------------------veriable ka type janane ke liye------------------------
// let mane= [];
// console.log(typeof mane);
// --------------------------------------------------------
// ----------------------------------------------------------------------its called Array constructor-----------
// let fruit= new Array ("mango","banana","grapes");
// console.log(fruit);

// 🔹 Difference kya hai?
// new Array(...) → ek constructor call hai. Matlab tum explicitly bol rahe ho ki ek naya Array object banao.

// Array(...) → ek function call hai jo internally wahi constructor use karta hai.

// JavaScript mein dono valid hain, aur dono ek hi result dete hain.

// let fruit= Array ("mango","banana","grapes");
// console.log(fruit);
// but best way to write arrays 
// let name=["raman","mangal","aman","vimal"];
// ------------------------------------------------------------------assingning new element to exist array
// let name=["raman","mangal","aman","vimal"];
// name[2]="sadhna";
// name[4]="sonam";
// console.log(name);


// ----------------------------------------------------------------------its called ----for of loop-----------------------------
// for( let item of name){
//   console.log(item);
// };
// -----------------------------------------------------------------------we can do it same by use of foor loop------------------
//  for( item=0; item<=name.length; item++){
//   console.log(name[item]);
//  }



// --------------------------------------------------------its called---- for in loop ---it use to print the index number of array-------------------------------------------
// for (let item in name){
//   console.log(item);
// }
// that why we called ittrable array for of loop and for in loop kiu ki ye one one by one output dete hai jab tak loop ki condition false nhi ho jati 

// ---------------------------------------------------------------------------------.For each ----------Function--------------------------------
//  let fruit =["mangao","orange","apple","banana"]

//  fruit.forEach(( current,index,array)=>{
//   console.log(current,index,array);
//  });
// ----------------------------------------------------------------------------------.map-----------------function-----------------------------
//  let fruit =["mangao","orange","apple","banana"]

//  fruit.map((current,index,array)=>{
//    console.log(current,index,array);
//  }
// )
// ham .foreach se bhi vahi output le sakte hai jo .map se le sakte hai lekin .foreach se return me value nhi le sakte jab ki .mpa me esa kar saktehai

// let perents=["mango","haman","jaman","apple","dappel"];
// let perentscard=perents.map((current)=>{
//   return "mr."+current;
// });
// console.log(perentscard);

//  --------------------------------------------------------Example-------------------------------------
// let fruit =["mangao","orange","apple","banana"];

// let market=fruit.forEach((current,index,array)=>{
// return (`${current} ${index} ${array}`);
//               // or
//   // return (current + index+ array);
// });
// console.log(market);//iska output undefined


// let fruit =["mangao","orange","apple","banana"];

// let market=fruit.map((current,index,array)=>{
  // return (`${current} ${index} ${array}`);
              // or
  // return (current + index+ array);
// });

//  create a table of 2 use .forEach and .map

// -----------------------------------.forEach method without return use
// let table=[1,2,3,4,5,6,7,8,9,10];
// table.forEach((current,index,array )=> {
// console.log("table"+current*2);  
// });
// console.log(table);
// --------------------------------------.map method without return use
// let table=[1,2,3,4,5,6,7,8,9,10];
// table.map((current,index,array)=>{
// console.log(current*2);  
// });

// -----------------------------------.forEach method with return use

// let table=[1,2,3,4,5,6,7,8,9,10];
// let tebel=table.forEach((current,index,array) => {
// return (current*2);  
// });
// console.log(tebel);
// --------------------------------------.map method with return use

// let table=[1,2,3,4,5,6,7,8,9,10];
// let tebel=table.map((current,index,array) => {
// return ("table"+current*2);  
// });
// console.log(tebel);//iska output ek array ke form me ayega
//  is baat ka dyan  rakhna jab bhi koi value retun chahiye to variable 
// forEach ka use tab karna jab hame itrable to ho but apko naye -----array---point noted array ki na ki normal element in output  vo to for each se mil sakte hai but array nhi milega output mai--ki jarurat na ho agar app chahte ho jo pehle array tha vo vesa he rhe and but hame return me dusra array bhi mil jaye jo tumne modification kiye hai vo dusre array mai mil jaye


// ---------------------------------------------------------------------push----method to insert element in last in array------
// let newword=["raman","amans","chaman","gaman","saman","daman"]
// newword[0]="faman";//ye method element ko replace karta hai jo element ham dete hai us se
// newword.push("raman");

// ----------------------------------------------------------------------pop----method to remove last element from arrya------
// newword.pop("chaman");
// console.log(newword);

// --------------------------------------example of push and pop method when we want to know that what give in retrun value after use these method------------
// newword.push("raman");

// console.log(newword.push())//ye number of elements batata hai ki array me kitne element hai ya new  length of array
// console.log(newword);

// console.log(newword.pop("haman"))//ye number of elements batata hai ki array me kya remove kiya 
// console.log(newword);

// ------------------------------------------------------------------unshift-------------method use for insert Element in starting of array----------
// newword.unshift("sadhna");
// console.log(newword.unshift());
// console.log(newword);

// ---------------------------------------------------------------------shift----------------method use for remove element from staring of array-------
// newword.shift("sadhna");
// console.log(newword.shift());
// console.log(newword);

// ------------------------------------------------------------------------splice-----method use to add-------------
// let newword=["raman","amans","chaman","gaman","saman","daman"]
 
// console.log(newword.splice(3,0,"NAman","jaman","haman"));
// console.log(newword.splice(-1,0,"jaman","laman","oman"));//ye last se ek kaam se element ko add karta hai 
// console.log(newword.splice(newword.length,0,"jaman","laman","oman"));// ye elements ko last se add karta hai
//  console.log(newword);

// 🔹 Example 1: Only Update (No Delete)
// javascript
// let fruits = ["Apple","Banana","Mango"];
// // index 1 पर "Banana" को "Orange" से replace करना
// fruits.splice(1, 1, "Orange");

// console.log(fruits);
// Output: ["Apple","Orange","Mango"]

// 🔹 Example 2:
// const months = ["Jan", "march", "April", "June", "July"];

// // Step 1: Find index of "march"
// const indexToUpdate = months.indexOf("march");

// // Step 2: Replace using splice
// if (indexToUpdate !== -1) {
//   months.splice(indexToUpdate, 1, "March");
// }

// console.log(months);
// Output: ["Jan", "March", "April", "June", "July"]


// 🔹 Example 3:
// let months=["Jan", "March", "April", "June", "July"];
// const indexToUpdate = months.indexOf("march");
// months.splice(indexToUpdate, 1, "March");
//  console.log(months.indexOf("June"));
//  console.log(months.splice(3,1));
//  console.log(months);



// --------------------------------------------------------------find index number by name of element---------------------------------------------------



// किसी array में दिए गए नाम का index (number/position) आसानी से निकाल सकते हो। इसके लिए JavaScript में कुछ methods हैं:

// 📌 Example Array
// javascript
// let names = ["Chaman","Raman","laman","Atman", "Agman","Aman", "Chaman", "Suman", "Gagan", "Chaman", "Suman", "Gagan", "Chaman"];
// 🔹 तरीका 1: indexOf()
// javascript
// console.log(names.indexOf("Chaman"));  
// // Output: 2
// 👉 यहाँ "Chaman" का index 2 है (क्योंकि array 0 से शुरू होता है)।
// -------------------------------------------------------------------find index number Element name,kis index number jaha se pata krna hai-------
// 🔹 तरीका 2: indexOf(index element name,index number jaha se pata krna hai )
// console.log(names.indexOf("Chaman",2)); 

// console.log(names.indexOf("Chaman",6)); //iska output -1 ayega kiyu ki jis element ka muje indexnumber pata karna hai uska index number(jaha se pata karna hai) diye gya index se kam hai

// console.log(names.lastIndexOf("Chaman"));// jab ak array mai kafhi same element ho tab muje jo last mai hoga uska index number   output me  dega

// console.log(names.lastIndexOf("Chaman",7)); 
// Array में "Chaman" है index: 0, 6, 9, 12

// तुमने लिखा lastIndexOf("Chaman", 7) 👉 इसका मतलब है: "Index 7 से पीछे की तरफ search करो।"

// Step by step:

// Index 7 → "Suman" (match नहीं)

// Index 6 → "Chaman" ✅ match मिल गया।


// 🔹 तरीका 3: findIndex()
// javascript
// let position = names.findIndex(name => name === "Suman");
// console.log(position);  
// // Output: 3
// 👉 "Suman" का index 3 मिलेगा।

// 🔹 तरीका 4: अगर नाम मौजूद नहीं है
// javascript
// console.log(names.indexOf("XYZ"));  
// // Output: -1
// 👉 अगर नाम array में नहीं है तो -1 return होगा।

// ---------------------------------------------------know that Elementexist or not-------------------------
// agar apko pata karna hai ki ye element array mai exist karti hai ya nhi tab .includes method use karte hai 
// console.log(names.includes("faman"));
// console.log(names.includes("Raman"));
// iska output true ya false ayega agar exist karta hai to true ayega nhi to false ayega 

// ✅ Hinglish Summary
// Tum indexOf() या findIndex() use करके किसी नाम का array number (index) निकाल सकते हो। अगर नाम नहीं मिला तो result -1 आएगा।



// ---------------------------------------------------------------------------find and filter in Array------------------------------------

// ------------------------------------------------------------------find---method is method array ka pehla element output me ata hai--------------------------------------------------
// let num=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
// const final=num.find((current)=>{
//   return current;

// })
// console.log(final);


// let num=[1,2,3,4,5,4,7,8,9,10,6,4,13,6,15,4,17,18,5];
// const final=num.find((current)=>{
//   return current>5;// when we use condition then it search by recursion or accursion method 

// })
// console.log(final);

// let num=[1,2,3,4,5];
// const final=num.map((current)=>{
//   return current*2;
//   })
// console.log(final);
// let result=final.find((current)=>{
//   return current;
// });
// console.log(result);

// let result=final.findIndex((current)=>{
//   return current>5;
// })
// console.log(result);

// ------------------------------------------------------------filter-----method--------------------------------

// let num=[1,2,3,4,5,4,7,8,9,10,6,4,13,6,15,4,17,18,5];
// const final=num.filter((current)=>{
//   return current>5;// when we use condition then it search by recursion or accursion method   
// })
// console.log(final);
// let uninum=6; 
// let num=[1,2,3,4,5,6,7,8,9,6,10,,6,11,12,13,14,15,16,17,18,19];
// let result=num.filter((current)=>{
//   return(current!=uninum);
// });
// console.log(result);

// let products=[
//   { name:"Laptop",price:1200},
//   { name:"Phone",price:800},
//   { name:"Tablet",price:300},
//   { name:"Smartwatch",price:150},

// ]
// let product=products.filter((current)=>{
//   return(current.price<500);
// })
// console.log(product);

// -----------------------------------------------------------------------------new Set-----Method in Array-------------------------------------
//find unique value given array 
// 1 way to solve problem

// let num=[1,2,3,4,5,6,7,8,9,6,10,6,11,12,13,14,15,16,17,18,19];
// let unique=num.filter((current,index,array)=>{
//   console.log(index);
//   // console.log(array.indexOf(current));//[array[index] likhne se uss position ki value milti haicurrent: 10
// // index: 0
// // arr[index]: 10

// // current: 20
// // index: 1
// // arr[index]: 20

// // current: 30
// // index: 2
// // arr[index]: 30]
// return array.indexOf(current)===index;
// });
// console.log(unique);

// 2 way to solve problem
// let num=[1,2,3,4,5,6,7,8,9,6,10,6,11,12,13,14,15,16,17,18,19];
// console.log(new Set(num));



// --------------------------------------------------------------------------------------------------------Spread---method in Array----------------------------
// ... its called spread method ye privious array se ek new array bana deta jo privious array se indipendent hota hai

// example
// let num = [1, 2, 3];  
// let copy = [...num];//spread function sirf arrya ya object mai work karta hai
// let cop = num;
// num.push(4);
// console.log(num);  // [1,2,3,4]
// console.log(copy); // [1,2,3]
// console.log(cop);

// example
// let gum=(1,2,3,4,5,6,7,8,9)//spread method yaha work nhi karega because that not array or object
// let fel=(...gum)
// gum.push(10);
// let sop=gum

// ---------------------------------------------------------------------------------------------------set convert in array----------------------
// example
// let num=[1,2,3,4,5,6,7,8,9,6,10,6,11,12,13,14,15,16,17,18,19];
// console.log([new Set(num)]);

// ---------------------------------------------------------------------------------set convert in arrya with spread method---------------------------
// example
// let num=[1,2,3,4,5,6,7,8,9,6,10,6,11,12,13,14,15,16,17,18,19];
// console.log([...new Set(num)]);
// ------------------------------------------------------------------------------------short---method-------------------------------
// example
// let fruit=["mango","haman","jaman","apple","dappel"];
// fruit.sort()
// console.log(fruit.sort());


// let fruit=["mango","haman","jaman","apple","dappel"];
// console.log(fruit);

//[ let num=[1,2,3,4,5,6,7,8,9,6,10,6,11,12,13,14,15,16,17,18,19];
// num.sort();
// console.log(num);
// JavaScript ka sort() method by default string comparison karta hai, number comparison nahi.
// Matlab har element ko string mein convert karke compare karta hai:
// "10" ko "2" se compare karega → aur "10" ko chhota samjhega kyunki "1" < "2" (lexicographical order).
// Isliye output galat lagta hai, jaise:]

// soloution
// it use for assending order
// example(1)
// let num=[1,2,3,4,5,6,7,8,9,6,10,6,11,12,13,14,15,16,17,18,19];
// num.sort((a,b)=>{
//   return a-b;
// });
// console.log(num);

// example(2)
// let num=[1,2,3,4,5,6,7,8,9,6,10,6,11,12,13,14,15,16,17,18,19];
// num.sort((a,b)=>{
//   if (a>b) return 1;// here 1 means switch the function
//   if(a<b) return -1;// here -1 means keep the order
// });
// console.log(num);

// it use for desecnding order
// it use for assending order
// example(1)
// let num=[1,2,3,4,5,6,7,8,9,6,10,6,11,12,13,14,15,16,17,18,19];
// num.sort((a,b)=>{
//   return b-a;
// });
// console.log(num);

// example(2)
// let num=[1,2,3,4,5,6,7,8,9,6,10,6,11,12,13,14,15,16,17,18,19];
// num.sort((a,b)=>{
//   if (a>b) return -1;// here 1 means switch the function
//   if(a<b) return 1;// here -1 means keep the order
// });
// console.log(num);

// --------------------------------------------------convert--method----------------------------------
// example
// let fruit=["mango","haman","jaman","apple","dappel"];
// let fruits=fruit.map((current,index,array)=>{
//   return current.toUpperCase();
// })
// console.log(fruits);

// ---------------------------------------------------Compression--method------------------
// example - find the squre of even number 

// let evensqure=[1,2,3,4,5,6,7,8,9,6,10,6,11,12,13,14,15,16,17,18,19];
// let result=evensqure.map((current)=>{
//   if (current%2==0)
//     return current*current;
// }).filter((current)=> current);
// console.log(result);

// let evensqure=[1,2,3,4,5,6,7,8,9,6,10,6,11,12,13,14,15,16,17,18,19];
// let result=evensqure.map((current)=>(current%2==0 ?current*current:undefined));
// let final=result.filter((current)=>current!=undefined);
// console.log(final);

// ------------------------------------------------------------reduce--method---------------------------

// structure write to reduce method
// array.reduce(function callback(accumulator, currentValue, index, array) {
//   // Your logic here
//   // Return the updated accumulator value
// }, initialValue);

// example
// let cart=[100,200,400,800,450];
// let Total=cart.reduce((accumulate,current,index,array)=>{
//   return accumulate+current;
// },0);
// console.log(Total);

// ----------------------------------------------------------strings-----------------------------------
// find the leangth of string
// example
// let str="\"Hello\" Raman Thakur\n'badpra\'";            //here n use to get next line in output and \ use for take inverted commas or single qutes ,double qutes
// console.log(str+str.length);                            //length start from 1 and index start from 0

// ----------------------------------------------------search or find index number-----------method in string---------------------

// let str="raman thakur badpura up";

// let index=str.lastIndexOf("up");

// let index=str.lastIndexOf("u");

// let index=str.lastIndexOf("u",21); //ye backword check karega ecuse we use lastindex keyword here 21 is position jaha se search karna hai

// let index=str.indexOf("u",21); //ye forword check karega ecuse we use lastindex keyword

// let index=str.indexOf("u");// here we gate index number u but from thakur u

// console.log(index);//its give index number of e 

// console.log(str.indexOf("etawah"));//indexof case sencetive hota hai

// console.log(str.indexOf("Etawah"));//case sencetive ki vajah se output -1 ayega

// ------------------------------------------------string to arrya----------------------

// in this method we convert full string in array

// let str=new Array("raman thakur badpura etawah");
// console.log(str);

// in this method we convert every letter in single element in array form then we find index number use map method

// let str="raman thakur badpura etawah";
// console.log(str.includes("raman"));// that is use check existance of string or string letter

// console.log(str.search("raman",21));// in search method we can not check backword index number like lastindex method becuse we can give postion number in lastindex method
// console.log(str.search(/Raman/i));//here i use to ignore casesencetivity of letter
// console.log(str.search(/Raman/g));//here g use to check full string that letter index number we want but it give first letter index number that matched in string so we not use in serch method it mostly
// let newstr=Array.from(str);
// // console.log(newstr); 

// let mapstr=newstr.map((current,index)=>`${current}-${index}`);
// console.log(mapstr);

// ------------------------------------------------------------match---method--------------------------

// example
// let str="raman thakur badpura etawah";
// let matchstr=str.match("Badpura");// ye bhi casecensetive hai and if string does not mached then it give null output 
// console.log(str.match("badpura"));
// let str="raman thakur badpura etawah thakur";
// console.log(str.match(/thakur/g));//g called globel flag tat use as a full scenner of string so whense g keyword then we get all similar word that we want 
// console.log(str.matchAll("thakur"));
// console.log(...str.matchAll("thakur"));
// let strresult=str.matchAll("thakur");
// let result=[...strresult];
//  console.log(result);

//  we also use for loop
  let str="raman thakur badpura etawah thakur";
let fianlstr=[...str.matchAll("thakur")];
console.log(fianlstr[0][0],fianlstr[1][0]);

