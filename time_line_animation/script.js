var hi = document.querySelector("#nav i")
var by =document.querySelector("#full i")

var tl= gsap.timeline()


tl.to("#full",{
    right:0,
    duration:0.4
})
tl.from("#full h4",{
    x:100,
    opacity:0,   // transpirancy
    duration:0.8,  //itne samay ke lie animation challega 
    stagger:0.2  //iska matlab ekek kar ke aayga 
})
tl.pause()

hi.addEventListener("click",function()
{
  tl.play()

})
by.addEventListener("click",function()
{
  tl.reverse()
})






gsap.from("#nav h2",{
    x:-100,
    opacity:0,
    duration:1,
    rotation:20,
    delay:0.5,
    stagger:0.2
   
})
