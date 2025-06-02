function breaktheText() {
    var h1 = document.querySelector("h1"); // h1 select
    var hiText = h1.textContent;           // h1 text le raha
    var splitText = hiText.split("");      // har character split
    var clutter = "";
    var halfValue = Math.floor(splitText.length / 2); // define half

    splitText.forEach(function(elem, idx) {
        if (idx < halfValue) {
            clutter += `<span class="a">${elem}</span>`;
        } else {
            clutter += `<span class="b">${elem}</span>`;
        }
    });

    h1.innerHTML = clutter; // final HTML inject
}

breaktheText();

// Animation for first half
gsap.from("h1 .a", {
    y: 80,
    duration: 0.8,
    delay: 0.5,
    opacity: 0,
    stagger: 0.15
});

// Animation for second half
gsap.from("h1 .b", {
    y: 80,
    duration: 0.8,
    delay: 0.4,
    opacity: 0,
    stagger: -0.15
});
