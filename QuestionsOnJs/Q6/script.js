// 6. Create a tabbed interface where clicking on tabs display different content sections without page reload.

// var about = document.querySelector('#about');
// var home = document.querySelector('#home');
// var contact = document.querySelector("#contact");

// var abouttext = document.querySelector('#abouttext');
// var hometext = document.querySelector('#hometext');
// var contacttext = document.querySelector("#contacttext");

// hometext.style.display = "block";
// hometext.style.width = "50%";

// home.addEventListener("click", function(){
//     hidetext();
//     hometext.style.display = "block";
//     hometext.style.width = "50%";
// })

// about.addEventListener("click", function(){
//     hidetext();
//     abouttext.style.display = "block";
//     abouttext.style.width = "50%";
// })

// contact.addEventListener("click", function(){
//     hidetext();
//     contacttext.style.display = "block";
//     contacttext.style.width = "50%";
// })

// function hidetext(){
//     document.querySelectorAll("h3").forEach(function(h3){
//         h3.style.display = "none";
//     })
// }

var divs = document.querySelectorAll(".tab");
var texts = document.querySelectorAll('h3');

texts[0].style.display = "block";
texts[0].style.width = "50%";

divs.forEach(function(div, index) {
    div.addEventListener("click", function(){
        hideAllText();
        texts[index].style.display = "block";
        texts[index].style.width = "50%";
    });
});

function hideAllText() {
    texts.forEach(function(text) {
        text.style.display = "none";
    })
}