gsap.from("#page1", {
   scale: 20,
   opacity: 0,
   duration: 3,
   rotate: 120
})

gsap.from("#page2 h2", {
   x: 500,
   opacity: 0,
   duration: 2,
   rotate: 0,

   scrollTrigger: {
      trigger: "#page2 h2",
      scroller: "body",
      markers: true,
      start: "top 70%",
      end: "top 60%",
      toggleActions: "play none none reverse" // This makes it reversible
      // Format: "onEnter onLeave onEnterBack onLeaveBack"
   }
})

gsap.from("#page2 h3", {
   x: -500,
   opacity: 0,
   duration: 2,
   rotate: 0,

   scrollTrigger: {
      trigger: "#page2 h3",
      scroller: "body",
      markers: true,
      start: "top 70%",
      end: "top 60%",
      toggleActions: "play none none reverse" // This makes it reversible
   }
})

