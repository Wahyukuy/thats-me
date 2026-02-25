gsap.registerPlugin(ScrollTrigger);

gsap.from("header h1", {
  duration:1.5,
  y:-50,
  opacity:0,
  ease:"power3.out"
});

gsap.from("header p", {
  duration:1.5,
  opacity:0,
  delay:0.5
});

gsap.from(".btn", {
  duration:1,
  scale:0.5,
  opacity:0,
  delay:1
});

gsap.from(".card", {
  scrollTrigger:{
    trigger:".card",
    start:"top 80%"
  },
  y:50,
  opacity:0,
  duration:1,
  stagger:0.2
});
