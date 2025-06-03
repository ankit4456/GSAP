window.addEventListener("wheel", function (dets) {
    if (dets.deltaY > 0) {
        gsap.to("#mark", {
            x: "-200%",
            duration: 2,
            ease: "none"
        });

        gsap.to("#mark img",{
            rotate:180,
        })
    } else {
        gsap.to("#mark", {
            x: "0%",
            duration: 2,
            ease: "none"
        });
        gsap.to("#mark img",{
            rotate:0,
        })
    }
});
