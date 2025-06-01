var path = "M 10 100 Q 500 100 990 100";
var finalPath = "M 10 100 Q 500 100 990 100";

var string = document.querySelector("#string");

string.addEventListener("mousemove", function (dets) {
    var x = dets.clientX;
    var y = dets.clientY - string.getBoundingClientRect().top;

    var newPath = `M 10 100 Q ${dets.x} ${y} 990 100`;

    gsap.to("svg path", {
        attr: { d: newPath },
        duration: 0.3,
        ease: "power3.out"
    });
});

string.addEventListener("mouseleave", function () {
    gsap.to("svg path", {
        attr: { d: finalPath },
        duration: 2,
        ease: "elastic.out(1, 0.2)"
    });
});
