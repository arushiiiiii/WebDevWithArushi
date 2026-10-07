var tl = gsap.timeline();
tl.from("#nav h3", {
    y:-50,
    opacity:0,
    delay:0.4,
    duration:0.8,
    stagger:0.3,     // isse saare h3 elements ek ek krke aayenge in 0.4 second
})

tl.from("#main h1", {
    x:-500,
    duration:0.8,
    opacity:0,
    stagger:0.4,
})
tl.from("img", {
    x:100,
    rotate:45,
    opacity:0,
    duration:0.5,
    stagger:0.5
})