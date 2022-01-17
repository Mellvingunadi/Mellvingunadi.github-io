gsap.registerPlugin(ScrollTrigger);

//create timeline that include scrolltrigger animation
let tl = gsap.timeline({
    scrollTrigger:{
        trigger:".mainContainer",
        start:"top 60%",
        end:"bottom 20%",
        scrub:1
    }
});

//this the timeline what coming in
tl.from(".mainContainer",{x:400, opacity:0, duration:2})
    .from("h2",{x:-300, opacity:0,duration:3})
    .from(".container-sidePicture",{y: 500, opacity:0, duration:4})
    .from("h3",{y:-300, opacity:0, duration:1})










