gsap.registerPlugin(ScrollTrigger);

// Hero animation
gsap.from("header h1", {
  duration: 1.5,
  y: -40,
  opacity: 0,
  ease: "power3.out"
});

gsap.from("header p", {
  duration: 1,
  opacity: 0,
  delay: 0.4
});

gsap.from(".btn", {
  duration: 0.8,
  scale: 0.8,
  opacity: 0,
  delay: 0.8
});

// Scroll reveal + hide effect (reversible)
gsap.utils.toArray("section").forEach((section) => {

  const elements = section.querySelectorAll(".section-title, .card");

  gsap.fromTo(elements,
    {
      y: 50,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
        end: "top 30%",
        scrub: true   // <-- ini bikin animasi ikut scroll
      }
    }
  );

});
