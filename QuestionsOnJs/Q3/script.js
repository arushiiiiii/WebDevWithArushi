// 3. Create a form with input fields and a submit button. Use javaScript to validate the form and display and error massageif the input is invalid.

// jb bhi forms ke sath deal kro yaad rakho ki submit hone pr forms page ko reload kr dete hai, aur hume khyaal rakhna hai ki page reload na ho, agar page reload ha toh js nhi chalegi, kyunki js chal paye usse pehle he page reload ho chuka hoga.

// form ko submit krne pr reload hone se rokne ke liye -> Prevent default


var form = document.querySelector("form");
// var in1 = document.querySelector("#one");
// var in2 = document.querySelector("#two");
// instead of selecting multiple times
var inps = document.querySelectorAll('input[type = "text"]');   // isse hume ek array like structure milta hai -> node list 
var err = document.querySelector("h4");
form.addEventListener("submit", function(ev){
    ev.preventDefault();
    // if (in1.value === '' || in2.value === '') {
    //     err.textContent = "Error! Some fields are missing.";
    //     err.style.color = "red";
    // } else {
    //     err.textContent = "";
    //     err.style.color = "black";
    // }


    // inps.forEach(function(elem){
    //     if (elem.value === '') {
    //         err.textContent = "Error! Some fields are missing.";
    //         err.style.color = "red";
    //     } else {
    //         err.textContent = "";
    //         err.style.color = "black";
    //     }
    // }).    Here else statement won't work fine.

    for (var i = 0; i < inps.length; i++) {
        if(inps[i].value.trim() === '') {
            err.textContent = "Error! Some fields are missing.";
            err.style.color = "red";
            break;
        } else {
            err.textContent = "";
            err.style.color = "black";
        }
    }
})