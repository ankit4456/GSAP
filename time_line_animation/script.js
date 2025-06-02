document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector("#menu-icon");
    const closeIcon = document.querySelector("#close-icon");
    const fullPanel = document.querySelector("#full");
    const navTitle = document.querySelector("#nav h2");

    // Create timeline for panel animation
    const panelTl = gsap.timeline({paused: true});
    
    // Panel slide in
    panelTl.to("#full", {
        right: 0,
        duration: 0.4,
        ease: "power2.out"
    });
    
    // Links animation
    panelTl.from("#full h4", {
        x: 100,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)"
    });

    // Nav title animation
    gsap.from("#nav h2", {
        x: -100,
        opacity: 0,
        duration: 1,
        rotation: 20,
        delay: 0.5,
        ease: "elastic.out(1, 0.5)"
    });

    // Event listeners
    menuIcon.addEventListener("click", function() {
        panelTl.play();
        document.body.style.overflow = "hidden";
    });

    closeIcon.addEventListener("click", function() {
        panelTl.reverse();
        document.body.style.overflow = "auto";
    });

    // Close panel when clicking outside on mobile
    fullPanel.addEventListener("click", function(e) {
        if (e.target === fullPanel) {
            panelTl.reverse();
            document.body.style.overflow = "auto";
        }
    });

    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            gsap.set("#full", { clearProps: "right" });
        }
    });
});