// Developer Problems

// 1. Debugging a TypeError: Cannot read property 'X' of undefined:
 
var obj = {};
// obj.name.first;   // this will give typeError because we don't know if name property exists and since it does not exists, therefore it gives error
obj?.name?.first;  // this is called conditional chaining, we don't know that a preperty exists therefore we apply '?'



// 2. Handling Asynchronous Operations
// Ek button bnao and us button ke click pr aapko ek user lekr aana h random tareeke se and use add krna h dom mein

const getUser = document.querySelector('#getUser');

function getNewUser(){
    fetch(`https://randomuser.me/api/`)
.then(raw => raw.json())
.then(result => {
    const {name, email, gender, picture} = result.results[0];
    document.querySelector("#parent").innerHTML += `<div class="card w-60 p-4 rounded-xl bg-zinc-800">
            <div class="w-20 h-20 rounded-2xl bg-zinc-500 mb-3 overflow-hidden">
                <img src="${picture.large}" class="w-full h-full fit-cover" alt="">
            </div>
            <h3 class="font-semibold text-2xl">${name.first}</h3>
            <h5 class="text-sm font-semibold opacity-60">${gender}</h5>
            <h6 class="text-sm opacity-30">${email}</h6>
            <p class="mt-5 text-xs font-semibold opacity-80">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat doloribus harum facere asperiores.</p>
        </div>`;
})
}

getUser.addEventListener("click", getNewUser);



// 3. Working with local Storage
// Local Storage ek aisa space hai browser ke paas jismein tum data store krdo to data stored he rehta hai, aap chahe to browser band krdo, refresh krdo ya kuch bhi kro aapka data stored rahega jn tk aap khud usey delete na krde 
// LS poore browser ka hota hai ya website ka?  -> ls hota toh browser ka part hai pr data store yeh website ke naam se krta hai

// ek button bnao jisse aap user block krdoab jb bhi woh website khole use screen pr blocked dikhey, nhi toh website show ho and ek button jisse woh unblock ho
const block = document.querySelector("#block");
const unblock = document.querySelector("#unblock");
block.addEventListener("click", function(){
    localStorage.setItem("block", true);
    show();
})
unblock.addEventListener("click", function(){
    localStorage.setItem("block", false);
    show();
})
function show(){
    if(localStorage.getItem("block") == 'false'){
        document.querySelector("#status span").textContent = "Not Blocked";
    } else {
        document.querySelector("#status span").textContent = "Blocked";
    }
}
show();



// 4. blocking scroll until something happens
document.querySelector("#hide").addEventListener("click", function(){
    document.body.classList.toggle('overflow-hidden');   // add bhi use kr skte hai toggle ki jagah
});



// 5. custom tooltip
// tooltip nhi bnzi hai bs uska javascript code likha hai
document.querySelector("#hide").addEventListener("mouseenter", function(){
    document.querySelector(".tooltip").computedStyleMap.display = "initial";
})

document.querySelector("#hide").addEventListener("mouseleave", function(){
    document.querySelector(".tooltip").style.display = "none";
})