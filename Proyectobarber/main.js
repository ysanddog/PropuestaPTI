gsap.registerPlugin(ScrollTrigger);

// animación entrada hero
gsap.from(".hero-text", {
  y:50,
  opacity:0,
  duration:1
});

gsap.from(".hero-lottie", {
  x:80,
  opacity:0,
  duration:1,
  delay:0.3
});

// animación servicios
gsap.from(".card", {
  scrollTrigger: ".servicios",
  y:50,
  opacity:0.5,
  stagger:0.1,
  duration:1.2,
});

// animación clipper moviéndose con scroll
gsap.to(".clipper", {
  x: window.innerWidth + 300,
  rotation: 360,
  scrollTrigger:{
    trigger: "body",
    start: "top top",
    end: "bottom bottom",
    scrub: 1
  }
});