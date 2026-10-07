// for initial to final
// gsap.to("#box", {
//     x: 1000,
//     rotate: 360,
//     backgroundColor: "blue",
//     duration: 2,
//     delay: 1,
// })

// for final to initial
// gsap.from("#box", {
//     x: 1000,
//     rotate: 360,
//     backgroundColor: "blue",
//     duration: 2,
//     delay: 1,
// })

var tl = gsap.timeline();  // ek ke baad ek chalte hai, delay use krne ki zarurat nhi
tl.to("#box1", {
    x: 1200,
    rotate: 360,
    scale: 0.5,
    duration: 2,
    delay: 1
})
tl.to("#box2", {
    x: 1200,
    rotate: 360,
    scale: 0.5,
    duration: 2,
    // delay: 3
})
tl.to("#box3", {
    x: 1200,
    rotate: 360,
    scale: 0.5,
    duration: 2,
    // delay: 5
})