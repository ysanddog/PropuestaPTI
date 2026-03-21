gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

function createSmoothPath(points) {
  let d = `M ${points[0].x},${points[0].y}`;

  for (let i = 1; i < points.length - 1; i++) {
    const xc = (points[i].x + points[i + 1].x) / 2;
    const yc = (points[i].y + points[i + 1].y) / 2;

    d += ` Q ${points[i].x},${points[i].y} ${xc},${yc}`;
  }

  return d;
}
// Esperar a que todo cargue (clave para evitar lag)
window.addEventListener("load", () => {

  // HERO
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

  // CARDS
  gsap.from(".card", {
    scrollTrigger: ".hero",
    y:30,
    opacity:1,
    stagger:0.15,
    duration:0.2
  });

  // 🔥 CLIPPERS (ULTRA FLUIDO)
  
  const trails = gsap.utils.toArray(".trail");
const clippers = gsap.utils.toArray(".clipper");

clippers.forEach((clipper, i) => {

  const path = trails[i];

  const motionPath = [
    {x: -120, y: 120 + (i * 120)},
    {x: window.innerWidth * 0.25, y: 80},
    {x: window.innerWidth * 0.5, y: 300},
    {x: window.innerWidth + 150, y: 200}
  ];

  // convertir puntos a SVG path
  const d = createSmoothPath(motionPath);
path.setAttribute("d", d);

  // animar línea (efecto pincelada)
  gsap.to(path, {
    strokeDashoffset: 0,
    scrollTrigger:{
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      scrub: 1
    }
  });

  // mover máquina
  gsap.to(clipper, {
    motionPath: {
      path: motionPath,
      curviness: 1.2
    },
    rotation: 360,
    ease: "none",
    scrollTrigger:{
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      scrub: 0.8
    }
  });
gsap.to(path, {
  opacity: 0.2,
  delay: 1,
  duration: 0.2
});
});

});