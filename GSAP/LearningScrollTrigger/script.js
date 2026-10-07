gsap.from("#page1 #circle", {
    scale: 0,
    delay: 1,
    duration: 2,
    rotate: 720,
})
gsap.from("#page2 #circle", {
    scale: 0,
    duration: 2,
    rotate: 720,
    scrollTrigger: {
        trigger:"#page2 #circle",
        scroller: "body",
        markers:true,
        start:"top 60%",
        end:"top 30%",
        scrub:2,   // start point se chalna shuru krega aur end point tk , 2 se smooth rahega, true bhi likh skte h
    }//"#page2 #circle",  direct aise bhi likh skte h  // taaki humare page scroll krne pr animation chale
})