// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    // GSAP Animation - Fade in title, subtitle, and images
    gsap.fromTo(".title", { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
    gsap.fromTo(".subtitle", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 0.5 });

    gsap.from(".image-wrapper", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        delay: 1,
    });

    // Mouse-follow effect on image hover
    const images = document.querySelectorAll(".image-wrapper");

    images.forEach((image) => {
        image.addEventListener("mousemove", (e) => {
            const { left, top, width, height } = image.getBoundingClientRect();
            const x = ((e.clientX - left) / width - 0.5) * 20; // Adjust range
            const y = ((e.clientY - top) / height - 0.5) * 20; // Adjust range

            gsap.to(image, {
                x: x,
                y: y,
                duration: 0.3,
                ease: "power3.out",
            });
        });

        image.addEventListener("mouseleave", () => {
            gsap.to(image, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: "power3.out",
            });
        });
    });
});