document.addEventListener("DOMContentLoaded", () => {
    const fadeInElements = document.querySelectorAll(".project");

    function fadeInOnScroll() {
        fadeInElements.forEach((el) => {
            if (el.getBoundingClientRect().top < window.innerHeight * 0.9) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll();
});
