// 1. Create an html page with a button. When the button is clicked, change the text of a paragraph element.
var btn1 = document.querySelector("#first");
var p = document.querySelector("p")
btn1.addEventListener("click", function(){
    p.textContent = "Hey There! This is the changed paragraph.";
})

// 2. Create a page with two images and a button. When the button is clicked, swap the source attribute of the images.
var img1 = document.querySelector("#one");
var img2 = document.querySelector("#two");
document.querySelector("#second")
.addEventListener("click", function(){
    var src1 = img1.src;
    var src2 = img2.src;
    img1.src = src2;
    img2.src = src1;
})