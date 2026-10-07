//Spread
var arr = [1, 2, 3, 4, 5];
var arr2 = [...arr];  // copies the values of arr and any changes made in arr2 will not change arr.

// Conditional Statements --> if, else if, else, ternary operator, switch 
// null, undefined, NaN, 0, '', "", document.all --> All these are Falsey values
// rest all are Truthy

// Loops --> for, while, do-while, foreach, forin, forof
// foreach loop only works on arrays

// Functions
// Javascript have two main parts- es5 and es6
// es5 have 3 types of functions - function statements, function expressions, anonymous function
// es6 is only of one type but can be written in 3 types - fat arrow function --> a) basic fat arrow. b) fat arrow with one parameter. c) fat arrow with implicit return.
// In js functions are called first class functions which means that in js functions can be treated as value/variable
// syntax-
function abcd() {
    console.log("Hey");
}
abcd();

function fun() {
    // function statement
}
var fun = function() {
    // function expression
}
// function() {
//     // anonymous function
// }

// now fat arrow functions
// fat is (), arrow is =>
var a = ()=>{
    // basic fat arrow function
};
var b = (x)=>{
    // fat arrow with one param
    // since a single parameter is there therefore the x can bw written with or without braces
};
b(12);
var c = ()=>"abc";
var ans = c();

// in js if any function does not returns anything then it returns "undefined"

// undefined is a value (treated as a garbage value, can be called default value)
// not defined is an error
// null is also a value which resolve like, not found

// how to loop an array and do something with each element
var arr = [1, 2, 3, 4];
arr.forEach(function(val) {
    console.log(val + 1);
})


// Objects
// object ek tareeka hai jisse ki hum ek identity ki details ko ek sath rakh skte hai
// [] -> array
// {} -> object
// to create an object
var obj = {
    name: "Arushi",
    age: 20,
    email: "ag@gmail.com"
};
obj.name;
var obj2 = new Object();

////// synchronous code mein code humesha line by line chalta hai
// asynchronous code mein sara code ek sath shuru ho jata hai, jo pehle complete ho jaye uska answer dediya jaata hai.
// there are two types of stacks - Main Stack and side stack
// synchronous - main call stack
// asynchronour - call back queue
// Synchronous code goes into main stack whereas async code goes into the side stack
// now when the main stack becomes empty (i.e. the sync code had run and the event loop checks when the main stack becomes empty) then the line of code which is completed first in the side stack will be sent to the main stack and then run and then completed and then removed and then next code is sent
// the output of the code comes(or the final execution of the code occurs) only when it is run on the main stack i.e. code is executed only in the main stack, in side queue code can run but can't execute

// aisa koi bhi code jismein kuch time lgta hai, js mein use by default in most cases async code maan kr side stack mein daal diya jaata hai
// whenever these things are written the code is asynchronous - 

///// settimeout - settimeout ka code kuch der baad chalta hai
setTimeout(function(){
    console.log("hey");
}, 2000)

//// setinterval - setinterval ka code kuch der baad chalta hai baar baar ek particular interval time mein
var count = 1;
const humaraInterval = setInterval(function(){
    count++;
    console.log(count);
    if (count === 3) clearInterval(humaraInterval);
}, 1000)

//// Fetch API - yeh kisi aur url pr jaakr kuch data laayega ya data humare paas se us url pr lekr jaayega
// kyunki yeh internet pr jaayega aur fir data ko lekr aayega to isme tme lgta hai isliye by default he js mein fetch ko async bnaya gya hai.
// kyunki fetch ka kaam hai data laana woh bhi kisi url se ab aisa ho skta hai uss url ki website slow ho toh data laane mein time lge aur agar fetch synchronous hota toh uske baad ka code tb tk nhi chalta jb tk uska data nhi aajata, which is a big problem, poora code atak skta hai
fetch('https://randomuser.me/api/')
.then(raw => raw.json())
.then(readable => console.log(readable.results[0].gender));  // agar hume fetch hone ke baad koi kaam krana hai toh '.then' use krenge kyunki wrna jb tk data fetch hoga baaki ka code chal jayega
// raw ki jagah kuch aur bhi likh skte hai and directly it is not in readable format thereforewe will use .json

//// Axios (or other HTTP libraries) - Like fetch only bs thoda jyada developer friendly hai
axios.get('https://randomuser.me/api/')
.then(result => console.log(result.data.results[0]));

//// promise - iske andar jo code likhoge woh apna kaam krega aur yeh khud side stack mein chala jayega uss code ko lekr aur jb andar se code ke resolve kiya jaayega tb yeh chalege
// imagine a code that is async, mtlb ki yeh side stack mein jaayega aur baad mein chalega main stack mein, ab iss code ka ans aa bhi skta hai aur nahi bhi, smjho ki promise ke andar aap koi bhi async code likho and promise aapko ek parchi dega and uss parchi pr by default waiting likha hota hai, ispr mainly do events hote hai 'then & catch', agar data aayega toh parchi pr resolved likh jaayega aur agar data mein dikkat aayegi toh catch chalega and waiting ki jagah rejected likhjaayega
const parchi = new Promise(function(resolve, reject){
    // jaake ek user lao and agar woh male hai toh green button otherwise red button(rejected)
    fetch('https://randomuser.me/api/')
    .then(raw => raw.json())
    .then(result => {
        if(result.results[0].gender === 'male') resolve();
        else reject();
    });
})
console.log(parchi);    // yeh synchronous hai therefore pending answer dega
parchi
.then(function(){
    console.log("green button")
})
.catch(function() {
    console.log("red button");
})
// ye sabhi use he tb kiye jaate hai jb aapko kuch aisa krna ho jisme time lgega

//// Callbacks
// callbacks kuch khaas nhi balki sirf ek function hota h, speciality is ki ise pass kiya jata hai as a argument jb particular async code chal jaye
function abcd(a, b){
    b();
}
abcd(1, function(){
    console.log("callback ")
});
function doSomeAsyncTask(url, callback) {
    fetch(url)
    .then(raw => raw.json())
    .then(result => {
        callback(result);
    })
}
doSomeAsyncTask("https://randomuser.me/api/", function(result){
    console.log(result.results[0].gender, result.results[0].email, result.results[0].name.first);
})

//// Async/Await
// koi bhi function bna lo aur uske andar jo man mein aaye woh async code likhdo, ab jb aap sync likhte ho toh baad wali line pehle chal jaati hai kyunki async side stack pr hota hai aur baad wali line agar async ke basis pr hui toh code fail ho jaayega kyunki code depend krta hai async code pr jo ki baad mein chalega sync code chalne ke baad
// with async await aap async code bhi aise likh skta ho jaise ki aap normal sync code likh rhe ho
async function abcd(){
    let a = await fetch('https://randomuser.me/api/');
    a = await a.json();
    console.log(a);
}
abcd();

//// Callbacks vs Promises vs Async/Await
// ek url se data lekr aao aur usey console pr show kro via callback
// callback
function dataFetcher(url, callback) {
    fetch.apply(url)
    .then(raw => raw.json())
    .then(result => {
        callback(result)
    });
}
dataFetcher('https://randomuser.me/api/', function(result){
    console.log(result);
})
// Promises
function dataFetcher(url){
    const parchii = new Promise(function(resolve, reject){
        fetch(url)
        .then(raw => raw.json())
        .then(result => {
            resolve(result);
        })
    })
    return parchi;
}
dataFetcher('https://randomuser.me/api/')
.then(function(){
    console.log(result);
})
// Async/Await
async function dataFetcher(url) {
    let data = await fetch(url);
    let result = await data.json();
    return result;
}
async function f(){
    let data = await dataFetcher('https://randomuser.me/api/');
    console.log(data);
}
f();


///// generators
// aap program execution ko pause kr skte ho and bol skte ho ki ab agla step kro aur phir aap agla step jb bhi chahiye woh step kr skte ho
function* printNums(){
    console.log("started");
    yield 1;
    console.log("1st done");
    yield 2;
    console.log("2nd done");
    yield 3;
}
const ans = printNums();
console.log(ans.next().value);   // pehle yield tk chalega aur uski value bhi dega. Agar .value nhi likhenge toh started print hoga aur ek object print hoga jisme done ki value false hogi
console.log(ans.next().value);   // dusre tk
console.log(ans.next().value);   // teesre tk
console.log(ans.next().value);   // yahan done ki value true ho jaayegi
// print 1-10 on command
function* allNums(){
    for (let i = 1; i < 11; i++) {
        yield i;
    }
}
const gen = allNums();
console.log(gen.next().value);
console.log(gen.next().value);

///// Web Workers
// usually humara poora code single thread pr chalta hai pr kai baar kuch bade calculations perform krne pad jaate hai jiski wajah se aapka main thread busy ho jaata hai ya phir woh kaafi jyada loaded hojata hai aur aapke baaki tasks ki performance kam ho jaati hai
// iss situation ko acche se handle krne ke liye we use web workers, aap chaho toh apna koi task web worker ko bhej skte ho jo ki dusre thread mein usko perform krega and aapka main thread efficiently baaki cheezon ko handle kr paayega
// pehle toh make a seperate worker file
// hum apni main js file se data send krenge and worker file o accept krayenge and jo perform krna hai krenge and then wahan se data wapas main file bhejenge and main file mein wapas accept krenge
var nums = Array.from({length: 10000000}, (_,b) => b+1);
const worker = new Worker("worker.js");
worker.postMessage(nums);
worker.onmessage = function(data){
    console.log(data);
}


// this keyword
// this ki value baar baar badal skti hai alag alag conditions mein 

// global - window
console.log(this); // global scope
// global scope ka mtlb ki kisi bhi function ke andar code na hona, i.e. braces ke andar code na hona
function abcd() {
    console.log(this);
} // not global scope


// function - window
function abcd() {
    console.log(this);
}


// method - object
var obj = {
    name : function(){
        console.log(this);  // agar this.age likhte toh 25 return krta obj.name()
    },
    age : 25,
    email : "dsg@fjnbd",
}
obj.name();  // kyunki this use kiya isliye poora object return krega(i.e. name, age, email)


// function inside method (es5) - window
var obj2 = {
    sayName : function(){
        console.log(this);  // refers object
        function childfnc(){
            console.log(this);  // refers to window(rebinds the value of this to windows), therefore here you can't write this.age and etc etc
        }
    }
}
obj2.sayName();


// function inside method (es6) - object
var obj3 = {
    sayName: function(){
        const child = ()=>{
            console.log(this);  // arrow function says that take the value of this from the parent
        }
        child();
    }
}
obj3.sayName();
// if we write
var obj3 = {
    sayName : ()=>{
        console.log(this);  // arrow function takes the value from the parent , here the parent is obj3 and it is global therefore it will return window
    }
}
obj3.sayName();


// constructor fuction mein this ki value - new blank object
function add() {
    console.log(this);
}
const ans2 = new add(); // new creates a blank object and then the this refers to that blank object
// jis function ko hum new se chla dete hai unhe hum constructor function bhi kehte hai


// event listener mein this ki value - that element jis pr event listener lga ho
document.querySelector("button")
.addEventListener("click", function(){
    console.log(this);  // button pr denote hoga
})



// call apply bind
// yeh teen tareeke hai function ko call karne ke kisi object ko "this" maan kr
const objj = {name : "harsh"}
function abcd() {
    console.log(this);
}
abcd.call(objj);   // ingeneral function ki value window hoti lekin yahan humne obj call kiya hai isliye wahi value hogi

function abcd(a,b,c) {
    console.log(this,a,b,c);
}
abcd.apply(objj,[1,2,3]);

const func = abcd.bind(objj);  // bind hume baad mein chalane ke liye function deta hai. bind ne function banaya aur func mein store kr diya jise hum baad mein chla skte hai
func();


// Prototypal Inheritance
function makeHuman(name, age) {
    this.name = name;   // jb bhi function call hota hai toh jahan jahan this hota hai wahan ek blank object "{}" create ho jaata hai
    this.age = age;
    // this.printMyName = function(){     // this function is used in both human1 and human2 therefore it is taking extra space. We will minimize this space. to access the printMyName function without writing it here, but at a single place so that whenever it is called it can be used and is not availabe multiple times therefore saving space
    //     console.log(this.name);
    // }
}
makeHuman.prototype.printMyName = function(){
    console.log(this.name);
}

const human1 = new makeHuman("Harsh", 25);
const human2 = new makeHuman("Harshita", 23);


// Closures
// aisa koi bhi function jo ek aur function ko return karde usey closure kehte hai
function counter(){
    var count = 0;  // closure mein kisi variable ka istemal hona zaruri hai but hof mein nahi
    return function(){
        count++;
        console.log(count);
    }
}
var fnc = counter();
fnc();
fnc();

function abcde(){
    var a = 12;  // compulsory in closure
    return function(){
        console.log(a);
    }
}
var ans = abcde();
ans();

function timer(){
    var a = 12;
    return setTimeout(function(){
        console.log(a);
    }, 2000)  // here 2000 mtlb 2 sec baad ans aayega
}
var ans = timer();


// Event delegation - jb aap event listener se kai saare different elements ke events ko handle kar sake
// event listener ko parent pr lgao and unko id, class ya tag ke basis pr differentiate krke different task krao 
var parent = document.querySelector("#parent");
parent.addEventListener("click", function(details){
    if(details.target.id === "play"){
        console.log("play song")
    }
    else if (details.target.id === "pause") {
        console.log("pause song")
    }
    
})


// hofs - higher order functions
// aisa koi function jo ki ek function ko parameter mein accept krle and/or ek function ko return krde
var arr = [1,2,3,4,5];
arr.forEach(function(){});   // here forEach is a higher order function


// error handling - try and catch
function divide(a,b) {
    try{
        if (b===0) {
            throw Error("Something is wrong");
        }
        console.log(a/b);
    }
    catch(err){
        console.log(err);
    }
}
divide(12,0);


// Custom Events (Predefined events are - click, dblclick, mouseover, input)
// make event
// attach event to some dom element
// dispatch that event from that dom element in which you attached the event
const yourevent = new Event("party");
document.querySelector("button")
.addEventListener("party", function(){
    alert("reach on time");
})
document.querySelector("button").dispatchEvent(yourevent);