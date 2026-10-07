// 8. Create a search bar that displays live search results as users type, updatind the results without requiring a full page reload.

var input = document.querySelector("input");
var data = [
    {name: "Harsh", src: "https://plus.unsplash.com/premium_photo-1682096252599-e8536cd97d2b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Harshita", src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"},
    {name: "Harshika", src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"},
    {name: "Akash", src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"},
];

var pers = "";
data.forEach(function(elem){
    pers += `<div class="person">
                    <div class="img">
                        <img src= "${elem.src}" alt="">
                    </div>
                    <h4>${elem.name}</h4>
                </div>`;
})

document.querySelector('.people').innerHTML = pers;

input.addEventListener("input", function(){
    var matching = data.filter(function(e){
        return e.name.startsWith(input.value);
    })
    var newUsers = "";
    matching.forEach(function(el){
        newUsers += `<div class="person">
                    <div class="img">
                        <img src= "${el.src}" alt="">
                    </div>
                    <h4>${el.name}</h4>
                </div>`;
    })

    document.querySelector(".people").innerHTML = newUsers;
})