// pehle toh select krna hai woh element jise change krna hai
var h2 = document.querySelector("h1");


var h1 = document.createElement('h1');
h1.textContent = "hey";
h1.classList.add("makeitred");
document.querySelector("body").appendChild(h1);

var img = document.createElement("img");
img.src = '';
document.querySelector("body").appendChild(img);
document.querySelector("body").removeChild(img);

var btn = document.querySelector("button");
btn.addEventListener("mouseover", function(){
    btn.textContent = "starting...";
    btn.style.backgroundColor = 'red';
}); // (event, callback)
btn.addEventListener("mouseleave", function(){
    btn.textContent = "Button";
    btn.style.backgroundColor = '#fff';
});

document.querySelector("body")
.addEventListener("mousemove", function(dets){
    console.log(dets);
})