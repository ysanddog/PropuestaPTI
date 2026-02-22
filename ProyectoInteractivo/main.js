document.addEventListener("DOMContentLoaded", () => {

  gsap.from(".logo", {
    y: -40,
    opacity: 0,
    duration: 1
  });

  gsap.from(".hero", {
    scale: 0.9,
    opacity: 0,
    duration: 1.2,
    delay: 0.3
  });

  gsap.from(".product", {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.6
  });

});

gsap.registerPlugin(ScrollTrigger);

gsap.to(".hero-logo img", {
  scale: 5.5,
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});

// Animacion carrusel con scroll
gsap.registerPlugin(ScrollTrigger);

gsap.to(".carousel-left", {
  x: 100,
  y: -50,
  ease: "power3.inout",
  scrollTrigger: {
    trigger: ".footer",
    start: "top 80%",
    end: "top 40%",
    scrub: true,
    duration:2.5,
  }
});

gsap.to(".carousel-right", {
  x: -100,
  y:50,
  ease: "power3.inout",
  scrollTrigger: {
    trigger: ".footer",
    start: "top 80%",
    end: "top 40%",
    scrub: true,
    duration:4,
  }
});
gsap.to(".bg-gradient", {
  y: -200,
  scrollTrigger: {
    scrub: true
  }
});

