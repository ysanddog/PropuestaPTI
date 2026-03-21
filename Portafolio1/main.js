document.addEventListener("DOMContentLoaded", () => {

 gsap.from(".logo",{
 y:-40,
 opacity:0,
 duration:1
 })

 gsap.from(".hero-visual",{
 scale:.9,
 opacity:0,
 duration:1.2
 })

 gsap.from(".hero-content",{
 y:40,
 opacity:0,
 duration:1.2,
 delay:.3
 })

 gsap.from(".carousel-track",{
 y:80,
 opacity:0,
 duration:1,
 stagger:.15,
 scrollTrigger:{
 trigger:".item",
 start:"top 80%"
 }
 })


})


gsap.utils.toArray(".float-item").forEach((item,i)=>{

 gsap.to(item,{
  y:-1000,
  rotation:8,
  ease:"none",
  scrollTrigger:{
   trigger: item,
   start:"top bottom",
   end:"bottom top",
   scrub:true
  }
 })

})
gsap.to(".carousel-track",{
 xPercent:-50,
 ease:"none",
 duration:20,
 repeat:-1
})

const blocks = document.querySelectorAll(".story-block")

blocks.forEach((block, index) => {

let direction = index % 2 === 0 ? -150 : 150

gsap.from(block, {
x: direction,
opacity: 0,
duration: 1.2,
ease: "power3.out",

scrollTrigger:{
trigger: block,
start: "top 90%",
toggleActions: "play none none none"
}

})

})
