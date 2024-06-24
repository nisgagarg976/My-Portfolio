AOS.init();
// You can also pass an optional settings object
// below listed default settings
AOS.init({
  
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});



document.addEventListener('DOMContentLoaded', function() {
    const texts = ["Web Developer", "Competitive Programmer", "Full Stack Developer", "Tech Enthusiast"];
    let index = 0;
    const dynamicText = document.getElementById('dynamic-text');
    let currentText = '';
    let letterIndex = 0;

    function type() {
        if (letterIndex < texts[index].length) {
            currentText += texts[index].charAt(letterIndex);
            dynamicText.textContent = currentText;
            letterIndex++;
            setTimeout(type, 100); // Adjust typing speed here (milliseconds)
        } else {
            setTimeout(erase, 1000); // Wait before erasing text
        }
    }

    function erase() {
        if (currentText.length > 0) {
            currentText = currentText.slice(0, -1);
            dynamicText.textContent = currentText;
            setTimeout(erase, 50); // Adjust erasing speed here (milliseconds)
        } else {
            index = (index + 1) % texts.length;
            letterIndex = 0;
            setTimeout(type, 500); // Wait before typing next text
        }
    }

    setTimeout(type, 500); // Start typing after delay
});
