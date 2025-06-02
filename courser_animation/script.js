var main= document.querySelector("#main")
var cursor=document.querySelector("#cursor")

main.addEventListener("mousemove",function(dets){
   gsap.to(cursor,{
    x:dets.x,
    y:dets.y,
    duration:0.1,  //here we fix the duration 
    ease:"power1.out"  // yah pe gsap easing ka concept aata hai go to https://gsap.com/docs/v3/Eases/ for more info
})
})