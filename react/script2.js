// immutable vs mutable
// primitive and reference
var arr = [1,2,3,4];
var arr2 = arr;  // we won't be copying like this
arr2.pop();   // ab yahan arr2 ke sath sath arr bhi change ho rha hai. reference variable is also changing

// react js mein aapko ek state naam ki cheez milegi us bande ko aap mutate nhi kr skte mtlb ki directly uski value nahi hata ya jod skte
var state = [1,2,3,4];
state.pop(); // not allowed because it is immutable
state = [1,2,3]; // this will be done

// array, objects, destructuring, import and export
// map filter arrow fncs(implicit return) spread operator



// spread operator
var state = [1,2,3,4,5];
var copy = [...state];  // this is called spread operator and now the array is copied
copy.pop();  // sirf copy se pop hoga

// state can be anything - array, object, number etc.
var state = {name: "harsh", age: 24};
// state.name = "harshita"; // abhi toh ho jaayega lekin react mein nhi hota aisa
// we can't change state directly therefore
var copy = {...state};
copy.name = "harshita";
state = copy;   // this is how we will make changes in state in react



// destructuring
var obj = {name: "harsh", age: 25};
const {age} = obj;  // age bahar nikalne ke liye. object hai isliye {} agar array hota toh [].
// ab hum directly age access kr paayenge. obj.age likhne ki zarurat nhi

var obj2 = {name: "string", social: {
    facebook: {
        first: "abcd",
        second: "pqrs",
    },
}};
const {second} = obj2.social.facebook;

var arr = [12, function(){}, 13];
var[first,,third] = arr;   // here first is 12 and third is 13



// import export
// humlog component bnate hai, component mtlb page ka hissa jaise ki navbar, sidebar, cart, landing page, second page, etc.
// ab dikkat yeh hai ki har hissa alag alag component hai aur components ko hum log alag alag files mein rakhte hai, toh inko last mein jodna bhi padta h, jodne ke liye use hota h import export

// navbar - export
// sidebar - export
// cart - export
// main - import navbar, sidebar, cart

// one way
// agar ek he cheez export krni h toh
function Cart(){

}
export default Cart;
// jahan import krna hai wahan likhenge 
// import Cart from "./script2"

// second way
// ek file se kai saari cheezein export krne ke liye
export function Cart(){

}
export function Abcd(){

}
// jahan import krna hai uss file mein likhenge
// import {Cart, Abcd} from



// arrow functions (implicit return)
const abc = (val) => {
    console.log(val);
}
// jb ek he parameter ho toh hum bracet ko hta bhi skte h
const abc2 = val => {
    console.log(val);
}
// with implicit return
const abcd = ()=>12; // jo bhi arrow ke baad likhoge har condition mein wahi return hoga
// curly braces nhi lgayenge 12 mein wrna phir tumhe "return 12" likhna hoga

//now if you want to return an object. toh hume {} lgane padenge lekin ise compiler or interpreter confuse ho jaata h
const abcde = ()=>({name: 'abcd', age: 12});
console.log(abcd());



// Map filter
// dono hi array pr chalte hai, aur dono ka kaam hai array pr kuch perform krna and "ek naya array return krna"
var arr = [1,2,3,4,5];
// map - har element pr kuch karo and naye array mein rakho 
// foreach ke andar aata h function and function ke andar aata h value
arr.map(function(){}) // but we now use arrow functions more
const ans = arr.map(val=> val*2)
// map ke andar return krne ki he wajah se elements naye array mein place hote h

// Ab for example we have to - ek array hai jisme saare numbers jo ki 5 se bade hai unmein 5 jod dena and baaki numbers waise ke waise return kro naye array mein
var state = [1,6,3,7,4,5,2,0];   // state therefore hum directly ise nahi badalenge
const arr = state.map(elem => elem>5 ? elem + 5 : elem)

// map filter mein ek he farq hai, map saare bande lautata hai mtlb ki count kam nhi hoga, filter bando ko kam krsta h 
// filter
// ek array mein se saare woh nums hta do jo ki 5 se chote h
var arr = [1,2,3,4,5,6];
const anss = arr.filter(elem => elem>4);

var arr = [
    {name: "harsh", gender: "male"},
    {name: "harshita", gender: "female"},
    {name: "harshika", gender: "female"},
];
const answer = arr.filter(elem => elem.gender === "male");



// JSX - HTML + JavaScript => JavaScript XML
// JSX sirf dikhta html jaisa hai lekin wo actually JavaScript hi hai, isliye usme hum JavaScript ke sare features use kr skte h. JSX ko React ke andar use kiya jata h. JSX ko browser samajh nhi pata isliye usko JavaScript mein convert krna padta h, iske liye humlog Babel ka use krte h. Babel ek compiler hai jo JSX ko JavaScript mein convert krta h.
// javaScript mein hum html ke beech mein logic bhi likh skte h
// <h1>{2+3}</h1>  // JSX mein hum directly html ke beech mein JavaScript ka use kr skte h, aur woh JavaScript evaluate bhi ho jayega aur uska result h1 ke andar aa jayega. JSX mein hum JavaScript ke sare features use kr skte h, jaise ki loops, conditions, functions, etc. JSX ko React ke andar use kiya jata h, aur React usko JavaScript mein convert krta h.
// <h1>{login?"profile":"login"}</h1>  
// javaScript mein hume ek tag bnane mein bahot likhna hoga whereas JSX mein hum directly html ka use kr skte h.
var h1 = document.createElement('h1');
h1.innerHTML()  //and so on.

