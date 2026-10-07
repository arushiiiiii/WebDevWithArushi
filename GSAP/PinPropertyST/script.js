gsap.to("#page2 img", {
    width: "100%",
    scrollTrigger:{
        trigger: "#page2",   // jb hum pin property ka use krte hai toh hum tag ki jagah uske parent ko trigger krte hai
        scroller:"body",
        markers:true,
        start:"top 0",
        end: "top -100%",
        scrub:2,
        pin: true,
    }
})

gsap.to("#page4 h1", {
    transform: "translateX(-120%)",
    scrollTrigger: {
        trigger:"#page4",
        scroller:"body",
        markers:true,
        scrub:3,
        start:"top 0",
        pin: true,
        end:"top -100%",
    },
})