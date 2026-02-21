  document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(Draggable,MotionPathPlugin,MorphSVGPlugin,Physics2DPlugin,ScrollTrigger,ScrollSmoother,ScrollToPlugin,SplitText,TextPlugin)
  gsap.set(".hero-title, .hero-subtitle, .hero-cta", {
  opacity: 0,
  y: 40
});

gsap.set(".hero-visual img", {
  opacity: 0,
  scale: 3.0,
});

const tl = gsap.timeline({ delay: 0.3 });

tl.to(".hero-title", {
  opacity: 1,
  y: 10,
  x:100,
  duration: 0.8,
  ease: "back.out"
})
tl.to(".hero-title", {
  opacity: 1,
  y: 10,
  x:0,
  duration: 0.8,
  ease: "back.out"
})
.to(".hero-subtitle", {
  opacity: 1,
  y: 0,
  duration: 0.6
}, "-=0.4")
.to(".hero-cta", {
  opacity: 1,
  y: 0,
  duration: 0.5
}, "-=0.3")
.to(".hero-visual img", {
  opacity: 1,
  scale: 1,
  duration: 1,
  ease: "elastic.in"
}, "-=0.8");
  });


/* Seccion de gsap navbar */
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    gsap.to(".navbar", { y: -100, duration: 0.3 });
  } else {
    gsap.to(".navbar", { y: 0, duration: 0.3 });
  }

  lastScroll = currentScroll;
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("mouseenter", () => {
    gsap.to(link, { color: "#25D366", duration: 0.3 });
  });

  link.addEventListener("mouseleave", () => {
    gsap.to(link, { color: "#ffffff", duration: 0.3 });
  });
});

// seccion carrusel gsap
const track = document.querySelector(".showcase-track");


const products = gsap.utils.toArray(".product");
const radius = 220;

products.forEach((product, i) => {
  const angle = (i / products.length) * 0;

  gsap.set(product, {
    rotation: angle,
    transformOrigin: "0 1"
  });

  gsap.to(product, {
    //rotation: "+=360",
    transformOrigin: "center center",
    duration: 1,
    repeat: -10,
    ease: "none"
  });
  products.forEach(product => {
  gsap.to(product, {
    z: "150",
    duration: 2,
    repeat: -2,
    yoyo: true,
    ease: "sine.inOut"
  });
});
});


gsap.utils.toArray(".product").forEach(product => {

  gsap.to(product, {
    y: 15,
    duration: 2,
    yoyo: true,
    repeat: -1,
    ease: "sine.inOut"
  });

  gsap.to(product, {
    z: 150,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

  
});
const showcasetrack = document.querySelector(".showcase-track");

gsap.to(track, {
  x: -track.scrollWidth / 2,
  duration: 20,
  ease: "none",
  repeat: -1
});



gsap.to(".wrench", {
  x: window.innerWidth + 1,  // recorre toda la pantalla
  ease: "none",
  scrollTrigger: {
    trigger: ".tool-divider",
    start: "top right",
    end: "bottom left",
    scrub: true
  }
});
gsap.to(".wrench", {
  y: 5,
  repeat: -0.2,
  yoyo: true,
  duration: 1.0,
  ease: "back.Out"
});

gsap.to(".shine", {
  left: "200%",
  duration: 2.5,
  repeat: -1,
  ease: "power1.inOut",
  delay: 1
});
// ===== Fondo animado hero =====

// movimiento del degradado
gsap.to(".hero-bg", {
  backgroundPosition: "300% 50%",
  duration: 18,
  ease: "none",
  repeat: -1,
  yoyo: true
});

// respiración de luces verdes
gsap.to(".hero-glow", {
  opacity: 0.75,
  duration: 3,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

// movimiento lento del glow
gsap.to(".hero-glow", {
  x: 40,
  y: -30,
  duration: 12,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});
const anim = lottie.loadAnimation({
  container: document.getElementById('logo-lottie'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'animation (3).json'
});
lottie.loadAnimation({
  container: document.getElementById('inicio-lottie'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'animation (3).json' // ruta del archivo
});

document.querySelector('.logo').addEventListener('mouseenter', () => anim.play());