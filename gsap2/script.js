gsap.from("h1",{
    y:100,
    color:"pink",
    duration:1,
    delay:-5,
    stagger:0.1,  //stagger GSAP me multiple elements ko ek ke baad ek delay ke sath animate karne ke liye use hota hai.
    repeat:-1,  //infinite loop if uue choose -1 else you manually operate that loop
    yoyo:true //reverse the animation //or say smooth infinite 
})