var tl = gsap.timeline({scrollTrigger:{
    trigger: ".two",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    // markers: true,
}})

tl.to("#fanta",{
    top: "120%",
    left: "0%"
}, 'orange')
tl.to("#orange-cut",{
    top:"160%",
    left: "23%"
}, 'orange')
tl.to("#orange",{
    width: "15%",
    top:"160%",
    right: "10%"
}, 'orange')
tl.to("#leaf",{
    top:"110%",
    rotate: "130deg",
    left: "70%",  
}, 'orange')
tl.to("#leaf2",{
    top:"110%",
    rotate: "130deg",
    left: "0%",
}, 'orange')


gsap.matchMedia().add("(max-width: 700px)", () => {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".two",
            start: "0% 95%",
            end: "70% 50%",
            scrub: true,
                // markers: true,

        }
    });
    tl.to("#fanta", {
        top: "160%",
        left: "30%",
    }, 'orange')
    .to("#orange", {
        width: "40%",
        opacity: 0,  
      
    }, 'orange')
});



var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".three",
    start: "20% 95%",
    end: "20% 50%",
    scrub: true,
    // markers: true,
}})

tl2.from(".lemon1",{
    rotate: "-90deg",
    left: "-100%",
    top: "110%"
}, 'ca')
tl2.from("#cocacola",{
    rotate: "360deg",
    top: "110%",
    left: "-10%",
}, 'ca')

tl2.from(".lemon2",{
    rotate: "90deg",
    left: "100%",
    top: "110%"
}, 'ca')
tl2.from("#pepsi",{
    rotate: "-360deg",
    top: "110%",
    left: "100%",
}, 'ca')

tl2.to("#orange-cut",{
    width:"18%",
    left: "42%",
    top: "204%"
}, 'ca')
tl2.to("#fanta",{
    width:"35%",
    top: "210%",
    left: "33%",
}, 'ca')



var tl3 = gsap.timeline({scrollTrigger:{
    trigger: ".four",
    start: "40% 95%",
    end: "40% 50%",
    scrub: true,
    // markers: true,
}})

tl3.from("#c2",{
    x: -600,
    duration: 1
},'la')

tl3.from("#c4",{
    x: 600,
    duration: 1
},'la')

tl3.from("#c1",{
    x: -500,
    duration: 1
},'l')

tl3.from("#c5",{
    x: 500,
    duration: 1
},'l')

