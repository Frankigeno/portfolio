gsap.registerPlugin(ScrollTrigger);


// animazione primo cap
gsap.fromTo("#chap-one",
    { 
        backgroundPosition: "center 0%"
    },
    {
        backgroundPosition: "center 50%",
      scrollTrigger: {
        trigger: "#chap-one",
        start: "bottom 100%",
        end: "bottom 0%", // definisci quanto scrollare
        scrub: 2 // attiva la sincronizzazione con lo scroll
      }
    }
);

// animazione secondo capitolo
gsap.fromTo("#chap-two .big-title",
    { 
        opacity: 0
    },
    {
        opacity: 1,
      scrollTrigger: {
        trigger: "#chap-two .big-title",
        start: "bottom 100%",
        end: "bottom 50%", // definisci quanto scrollare
        scrub: true // attiva la sincronizzazione con lo scroll
      }
    }
);
for (let index = 1; index <= 4; index++) {
    const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#chap-two #el"+index,
          start: "bottom 100%",
          end: "top 0%",
          scrub: 1.5
        }
      });
      
      // FASE 1 — Da invisibile a visibile senza blur (0% → 30%)
      tl.fromTo("#chap-two #el"+index,
        {
            scale:0,
        },
        {
            scale:1,
            duration: 0.3 }
      );
      
      // FASE 2 — Mantiene visibilità e zero blur (30% → 80%)
      tl.to("#chap-two #el"+index,
        {
            scale:1, 
            duration: 0.4 }
      );
      
      // FASE 3 — Aumenta blur (80% → 100%)
      tl.to("#chap-two #el"+index,
        { x: "-100%", duration: 0.3 }
      );
}

// terzo capitolo
gsap.fromTo("#chap-three .big-title",
    { 
        y: "-100%"
    },
    {
        y: "20%",
      scrollTrigger: {
        trigger: "#chap-three .big-title",
        start: "top 70%",
        end: "top 0%", // definisci quanto scrollare
        scrub: 1.2 // attiva la sincronizzazione con lo scroll
      }
    }
);


for (let index = 1; index <= 4; index++)
{
    const tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#chap-three #el" + index,
        start: "top 100%",
        end: "center 30%",
        scrub: 1
    }
    });
    tl.fromTo("#chap-three #el" + index,
    {
        scale:0.8,
        y: "100%"
    },
    {
        scale:1,
        y: "0%",
        duration: 0.15
    }
    );
    tl.to("#chap-three #el" + index,
    {
        scale:1,
        y: "0%",
        duration: 0.6
    }
    );
    tl.to("#chap-three #el" + index,
    { 
      scale:0.8,
      duration: 0.25
    }
    );
}

// quarto capitolo

gsap.fromTo("#chap-four .left-container",
    { 
        x: "-100%"
    },
    {
        x: "0%",
      scrollTrigger: {
        trigger: "#chap-four .left-container",
        start: "top 90%",
        end: "top 50%", // definisci quanto scrollare
        scrub: 1.2 // attiva la sincronizzazione con lo scroll
      }
    }
);

gsap.fromTo("#chap-four .right-container video",
    { 
        y: "100%",
        rotationY: 90
    },
    {
        y: "0%",
        rotationY: 0,
      scrollTrigger: {
        trigger: "#chap-four .left-container",
        start: "top 100%",
        end: "top 40%", // definisci quanto scrollare
        scrub: 1.5 // attiva la sincronizzazione con lo scroll
      }
    }
);

// quinto capitolo

gsap.fromTo("#chap-five .left-container video",
    { 
        y: "50%",
    },
    {
        y: "0%",
      scrollTrigger: {
        trigger: "#chap-five .left-container video",
        start: "top 100%",
        end: "top 80%", 
        scrub: 1.5
      }
    }
);

gsap.fromTo("#chap-five .right-container",
    { 
        x: "-100%",
    },
    {
        x: "0%",
      scrollTrigger: {
        trigger: "#chap-five .right-container",
        start: "top 100%",
        end: "top 80%", 
        scrub: 1
      }
    }
);

// ultimo capitolo

gsap.fromTo("#chap-last .right-container",
    { 
        y: "100%",
    },
    {
        y: "0%",
      scrollTrigger: {
        trigger: "#chap-last .right-container",
        start: "top 100%",
        end: "top 90%", 
        scrub: 1
      }
    }
);
