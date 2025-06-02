document.addEventListener('DOMContentLoaded', function() {
    var main = document.querySelector("#main");
    var cursor = document.querySelector("#cursor");
    var imagediv = document.querySelector("#image");
    
    // Initial cursor content
    cursor.textContent = ""; // Start empty
    
    main.addEventListener("mousemove", function(dets) {
        gsap.to(cursor, {
            x: dets.x,
            y: dets.y,
            duration: 0.1,
            ease: "power1.out"
        });
    });

    imagediv.addEventListener("mouseenter", function() {
        cursor.textContent = "view more";
        gsap.to(cursor, {
            scale: 4,
            backgroundColor: "rgba(255, 255, 255, 0.37)",
            duration: 0.3
        });
    });

    imagediv.addEventListener("mouseleave", function() {
        cursor.textContent = "";
        gsap.to(cursor, {
            scale: 1,
            backgroundColor: "#fff",
            duration: 0.3
        });
    });
});