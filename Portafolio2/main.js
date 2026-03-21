document.addEventListener("DOMContentLoaded", () => {
   gsap.registerPlugin(ScrollTrigger)

/* HERO INTRO */

gsap.from(".logo",{
y:-40,
opacity:0,
duration:1
})

gsap.from(".hero-brand",{
scale:.7,
opacity:0,
duration:1.2,
delay:.3
})

gsap.from(".hero-content h1",{
y:40,
opacity:0,
duration:1,
delay:.5
})

gsap.from(".hero-content p",{
y:30,
opacity:0,
duration:1,
delay:.7
})

gsap.from(".cta",{
scale:.8,
opacity:0,
duration:.8,
delay:.9
})


/* FLOATING PRODUCTS PARALLAX */

gsap.utils.toArray(".float-item").forEach((item)=>{

gsap.to(item,{
y:-160,
rotation:8,
ease:"none",

scrollTrigger:{
trigger:item,
start:"top bottom",
end:"bottom top",
scrub:true
}

})

})


/* STORYTELLING SCROLL */

gsap.utils.toArray(".story-block").forEach((block)=>{

gsap.from(block,{
y:80,
opacity:0,
duration:1.2,

scrollTrigger:{
trigger:block,
start:"top 80%"
}

})

})


/* INFINITE CAROUSEL */

gsap.to(".carousel-track",{

xPercent:-50,
ease:"none",
duration:25,
repeat:-1

})


/* PRODUCT APPEAR */

gsap.from(".product-card",{

y:100,
opacity:0,
stagger:.2,

scrollTrigger:{
trigger:".hero",
start:"top 90%"
}

})


/* MENU FULLSCREEN */

const menuBtn = document.querySelector(".menu-toggle")
const menu = document.querySelector(".menu-fullscreen")

let menuOpen = false

menuBtn.addEventListener("click", () => {

if(!menuOpen){

gsap.to(menu,{
yPercent:0,
duration:.6,
ease:"power4.out"
})

menuOpen = true

}else{

gsap.to(menu,{
yPercent:-100,
duration:.6,
ease:"power4.in"
})

menuOpen = false

}

})
});

