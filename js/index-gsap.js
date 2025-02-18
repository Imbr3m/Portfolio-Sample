// umm i think I made too much animations

// initalizing scrolltrigger
gsap.registerPlugin('ScrollTrigger');

// this is for respnsiveness media queries but for gsap
let mm = gsap.matchMedia();


// Landding page Intro
let tl = gsap.timeline(); // made a timeline for the intro of the website
tl.from(".text", {
    duration: 0.8,
    y: 40,
    opacity: 0,
    ease: "power2.inOut",
    delay: 1,
})
tl.from(".loader", {
    duration: 2,
    width: 0,
    opacity: 0,
    ease: "power4.inOut",
})
tl.to(".pre-loader", {
    duration: 2,
    top: "-110%",
    ease: "power4.inOut",
})
tl.from(".hero-image", {
    duration: 2,
    y: -50,
    rotate: 120,
    opacity: 0,
    ease: "power4.inOut",
}, "-=1.5")
tl.to(".hero-image", {
    duration: 2,
    scale: 0.7,
    ease: "power4.inOut",
}, "-=1.5")
tl.from(".logo", {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: "power4.inOut",
    stagger: {
        amount: 0.3,
    },
}, "-=1")
tl.from(".content-button", {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: "power4.inOut",
    stagger: {
        amount: 0.3,
    },
}, "-=1")
tl.from(".email-button", {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: "power4.inOut",
    stagger: {
        amount: 0.3,
    },
}, "-=1")
tl.from(".row", {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power4.inOut",
    stagger: {
        amount: 0.3,
    },
})
tl.to("nav", {
    zIndex: 999,
})
// Landing page end


// Logo spinning
gsap.to(".logo", {
    scrollTrigger: {
      trigger: "body",
      start: "top center",
      end: "bottom center",
      scrub: 1,           
    },
    rotate: 520,
});


// dark mode change pt 1
gsap.to("body", {
  scrollTrigger: {
    trigger: ".goals-section",
    start: "10% center",
    end: "100% center",
    toggleClass: { targets: "body", className: "dark-mode" },
    ease: "power2.inOut",
    toggleActions: "play reverse play reverse",
  },
});
gsap.to("nav", {
  scrollTrigger: {
    trigger: ".goals-section",
    start: "10% center",
    end: "100% center",
    toggleClass: { targets: "nav", className: "dark-mode" },
    toggleActions: "play reverse play reverse",
  },
});
gsap.to("a", {
  scrollTrigger: {
    trigger: ".goals-section",
    start: "10% center",
    end: "100% center",
    toggleActions: "play reverse play reverse",
  },
  color: '#f4f3ee',
});
gsap.to("svg", {
  scrollTrigger: {
    trigger: ".goals-section",
    start: "10% center",
    end: "100% center",
    toggleActions: "play reverse play reverse",
  },
  fill: 'white',    

});
gsap.to("h1, h2, h3", {
  scrollTrigger: {
    trigger: ".goals-section",
    start: "10% center",
    end: "100% center",
    toggleActions: "play reverse play reverse",
  },
  color: '#f4f3ee',   

});
gsap.to("p", {
  scrollTrigger: {
    trigger: ".goals-section",
    start: "10% center",
    end: "100% center",
    toggleActions: "play reverse play reverse",
  },
  color: '#f4f3ee',   

});
gsap.to(".email-button", {
  scrollTrigger: {
    trigger: ".goals-section",
    start: "10% center",
    end: "100% center",
    toggleActions: "play reverse play reverse",
  },
  backgroundColor: '#f4f3ee',    
  color: '#463f3a;',
});
gsap.to(".row-1, .row-3", {
  duration: 0.5,
    scrollTrigger: {
      trigger: ".goals-section",
      start: "10% center",
      end: "100% center",
      toggleActions: "play reverse play reverse",
    },
    color: '#f4f3ee',
  });

gsap.to(".row span", {
    scrollTrigger: {
      trigger: ".goals-section",
      start: "10% center",
      end: "100% center",
      toggleActions: "play reverse play reverse",
    },
    color: '#f4f3ee',
  });

gsap.to(".row-2", {
    scrollTrigger: {
      trigger: ".goals-section",
      start: "10% center",
      end: "100% center",
      toggleActions: "play reverse play reverse",
    },
    webkitTextStrokeColor: '#f4f3ee',
  });

gsap.to(".goals-section", {
  scrollTrigger: {
    trigger: ".goals-section",
    start: "10% center",
    end: "100% center",
    toggleActions: "play reverse play reverse",
    color: '#f4f3ee',
  },
});
// DARK MODE PT 1 END






// ABOUT ME SECTION
gsap.from(".about-me-header", {
  duration: 0.5,
  y: '30',
  opacity: 0,

  scrollTrigger: {
    trigger: ".about-me-section",
    start: "-20% center",
    end: "bottom center",
    ease: "power4.inOut",
  },
});
gsap.from(".about-img-container", {
  opacity: 0,
  x: '-30',
  scrollTrigger: {
    trigger: ".goals-section",
    start: "100% center",
    ease: "power4.inOut",
  },
});
gsap.from(".about-me-text", {
  opacity: 0,
  x: '30',
  scrollTrigger: {
    trigger: ".goals-section",
    start: "100% center",
    ease: "power4.inOut",
  },
});
// ABout me text pin
mm.add("(min-width: 1025px)", () => {
  gsap.to(".about-img-container", {
  
    scrollTrigger: {
  
      trigger: ".about-me-text",
      start: "top 10%",
      end: "bottom 40%",
      scrub: 1,
      toggleActions: "restart none none none",
      pin: true,
    }
  })
})
// ABOUT ME SECTION END








// SKILLS SECTION GSAP
// skills header intro
gsap.from(".skills-header", {
  duration: 0.5,
  y: '30',
  opacity: 0,

  scrollTrigger: {
    trigger: ".skills-section",
    start: "-20% center",
    end: "bottom center",
    ease: "power4.inOut",
  },
});
// skills section intro
gsap.from(".my-experties h2, .my-experties p", {
  duration: 1,
  y: 30,
  opacity: 0,
  stagger: 0.2, 
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".skills-section",
    start: "top center",
    end: "bottom center",
  },
});
gsap.from(".my-digital-toolbox h2, .my-digital-toolbox p", {
  duration: 1,
  y: 30,
  opacity: 0,
  stagger: 0.2, 
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".skills-section",
    start: "25% center",
    end: "bottom center",
  },
});
gsap.from(".my-experties-list h1", {
  duration: 1,
  y: 30,
  opacity: 0,
  stagger: 0.1, 
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".skills-section",
    start: "10% center",
    end: "bottom center",
  },
});
gsap.from(".my-digital-toolbox-list h1", {
  duration: 1,
  y: 30,
  opacity: 0,
  stagger: 0.1, 
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".skills-section",
    start: "30% center",
    end: "bottom center",
  },
});
// SKILLS SECTION END









// PROJECTS SECTION
// PROJECTS SECTION INTRO
gsap.from(".projects-header", {
  duration: 0.5,
  y: '30',
  opacity: 0,

  scrollTrigger: {
    trigger: ".projects-section",
    start: "-20% center",
    end: "bottom center",
    ease: "power4.inOut",
  },
});
// this animations would only run on desktop
mm.add("(min-width: 1025px)", () => {
// projects horzonta; scroll
  const cards = document.querySelector(".cards");
  const projectsContainer = document.querySelector(".projects-container");
  const body = document.body;

  function getScrollAmount() {
    let cardsWidth = cards.scrollWidth; 
    return -(cardsWidth - window.innerWidth);
  }
  const tween = gsap.to(cards, {
    x: getScrollAmount(),
    duration: 3,
    ease: "none",
    paused: true, 
    onStart: () => {
      body.style.overflowX = "auto";
    },
    onComplete: () => {
      body.style.overflowX = "hidden";
    }
  });

  ScrollTrigger.create({
    trigger: projectsContainer,
    start: "top 15%",
    end: () => `+=${getScrollAmount() * -1}`,
    pin: true,
    scrub: 1,
    animation: tween,
    invalidateOnRefresh: true,
  });

  window.addEventListener("resize", () => {
    tween.vars.x = getScrollAmount();
    ScrollTrigger.refresh();
  });

// preview cards 
  const projects = document.querySelectorAll(".card");
  const preview = document.querySelector(".preview");
  const previewImg = document.querySelector(".preview-img");
  
  let isInside = false;
  
  // Background positions for preview images
  const bgPositions = {
    p1: "0 0",
    p2: "0 25%",
    p3: "0 50%",
    p4: "0 75%",
    p5: "0 100%",
  };
  
  const isMouseInsideContainer = (e) => {
    const container = document.querySelector(".cards");
    const rect = container.getBoundingClientRect();
  
    return (
      e.clientX >= rect.left &&
      e.clientX <= rect.right &&
      e.clientY >= rect.top &&
      e.clientY <= rect.bottom
    );
  };
  
  // Function to move preview with mouse
  const movePreview = (e) => {
    const mouseInside = isMouseInsideContainer(e);
  
    if (mouseInside !== isInside) {
      isInside = mouseInside;
      gsap.to(preview, {
        scale: isInside ? 1 : 0,
        duration: 0.3,
      });
    }
  
    // Move preview smoothly with cursor
    gsap.to(preview, {
      x: e.clientX - preview.offsetWidth / 2,
      y: e.clientY - preview.offsetHeight / 2,
      duration: 0.2,
      ease: "power2.out",
    });
  };
  
  // Function to change preview background
  const updatePreviewImage = (e) => {
    const project = e.currentTarget;
    const projectId = project.id;
  
    gsap.to(previewImg, {
      backgroundPosition: bgPositions[projectId] || "0 0",
      duration: 0.4,
    });
  };
  
  // Add event listeners to each `.card`
  projects.forEach((card) => {
    card.addEventListener("mousemove", movePreview);
    card.addEventListener("mousemove", updatePreviewImage);
  });
  
  window.addEventListener("mousemove", movePreview);

})  
// darkmode pt mobile
mm.add("(max-width: 768px)", () => {
  gsap.to("body", {
    scrollTrigger: {
      trigger: ".projects-section",
      start: "10% bottom",
      endTrigger: ".contact-me-section", 
      end: "top center",
      toggleClass: { targets: "body", className: "dark-mode" },
      toggleActions: "play reverse play reverse",
    },
  });
  gsap.to("nav", {
    scrollTrigger: {
      trigger: ".projects-section",
      start: "10% bottom",
      endTrigger: ".contact-me-section", 
      end: "top center",
      toggleClass: { targets: "nav", className: "dark-mode" },
      toggleActions: "play reverse play reverse",
    },
  });
  gsap.to("svg", {
    scrollTrigger: {
      trigger: ".projects-section",
      start: "10% bottom",
      endTrigger: ".contact-me-section", 
      end: "top center",
      toggleActions: "play reverse play reverse",
    },
    fill: 'white',    
  
  });
  gsap.to(".email-button", {
    scrollTrigger: {
      trigger: ".projects-section",
      start: "10% bottom",
      endTrigger: ".contact-me-section", 
      end: "top center",
      toggleActions: "play reverse play reverse",
    },
    backgroundColor: '#f4f3ee',    
    color: '#463f3a;',
  });
  
  gsap.to("a", {
    scrollTrigger: {
      trigger: ".projects-section",
      start: "10% bottom",
      endTrigger: ".contact-me-section", 
      end: "top center",
      toggleActions: "play reverse play reverse",
    },
    color: '#f4f3ee',   
  
  });
  gsap.to("h1, h2, h3, h4", {
    scrollTrigger: {
      trigger: ".projects-section",
      start: "10% bottom",
      endTrigger: ".contact-me-section", 
      end: "top center",
      toggleActions: "play reverse play reverse",
    },
    color: '#f4f3ee',   
  });
  
  gsap.to("p", {
    scrollTrigger: {
      trigger: ".projects-section",
      start: "10% bottom",
      endTrigger: ".contact-me-section", 
      end: "top center",
      toggleActions: "play reverse play reverse",
    },
    color: '#f4f3ee',   
  
  });
  gsap.to(".hover-text", {
    scrollTrigger: {
      trigger: ".projects-section",
      start: "10% bottom",
      endTrigger: ".contact-me-section", 
      end: "top center",
      toggleActions: "play reverse play reverse",
    },
    color: '#f4f3ee',   
  
  });
});
// darkmode mobile end

// dark mode change pt 2
gsap.to("body", {
  scrollTrigger: {
    trigger: ".projects-section",
    start: "10% center",
    endTrigger: ".contact-me-section", 
    end: "top center",
    toggleClass: { targets: "body", className: "dark-mode" },
    toggleActions: "play reverse play reverse",
  },
});
gsap.to("nav", {
  scrollTrigger: {
    trigger: ".projects-section",
    start: "10% center",
    endTrigger: ".contact-me-section", 
    end: "top center",
    toggleClass: { targets: "nav", className: "dark-mode" },
    toggleActions: "play reverse play reverse",
  },
});
gsap.to("svg", {
  scrollTrigger: {
    trigger: ".projects-section",
    start: "10% center",
    endTrigger: ".contact-me-section", 
    end: "top center",
    toggleActions: "play reverse play reverse",
  },
  fill: 'white',    

});
gsap.to(".email-button", {
  scrollTrigger: {
    trigger: ".projects-section",
    start: "10% center",
    endTrigger: ".contact-me-section", 
    end: "top center",
    toggleActions: "play reverse play reverse",
  },
  backgroundColor: '#f4f3ee',    
  color: '#463f3a;',
});
gsap.to("a", {
  scrollTrigger: {
    trigger: ".projects-section",
    start: "10% center",
    endTrigger: ".contact-me-section", 
    end: "top center",
    toggleActions: "play reverse play reverse",
  },
  color: '#f4f3ee',   

});
gsap.to("h1, h2, h3, h4", {
  scrollTrigger: {
    trigger: ".projects-section",
    start: "10% center",
    endTrigger: ".contact-me-section", 
    end: "top center",
    toggleActions: "play reverse play reverse",
  },
  color: '#f4f3ee',   

});
gsap.to("p", {
  scrollTrigger: {
    trigger: ".projects-section",
    start: "10% center",
    endTrigger: ".contact-me-section", 
    end: "top center",
    toggleActions: "play reverse play reverse",
  },
  color: '#f4f3ee',   

});
gsap.to(".hover-text", {
  scrollTrigger: {
    trigger: ".projects-section",
    start: "10% center",
    endTrigger: ".contact-me-section", 
    end: "top center",
    toggleActions: "play reverse play reverse",
  },
  color: '#f4f3ee',   

});
// dark mode change pt 2 end
// PROJECTS SECTION END



// UNDERLINE
gsap.fromTo(
  ".underline",
  { width: "0%" },
  {
    width: "100%", 
    duration: 1.5,
    ease: "power2.out",
    stagger: 0.3, 
    scrollTrigger: {
      trigger: ".skills-container",
      start: "top 20%", 
      toggleActions: "play none none none",
      
    },
  }
);




// CONTACT ME SECTION 
gsap.from(".contact-me-header", {
  duration: 0.5,
  y: '30',
  opacity: 0,

  scrollTrigger: {
    trigger: ".contact-me-section",
    start: "-20% center",
    end: "bottom center",
    ease: "power4.inOut",
  },
});
gsap.from(".contact-details div", {
  duration: 1,
  y: 30,
  opacity: 0,
  stagger: 0.1, 
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".contact-me-container",
    start: "top center",
    end: "bottom center",
  },
});

gsap.from(".input-row, input, .contact-form h2, .contact-form p, textarea, .send-message", {
  duration: 1,
  y: 30,
  opacity: 0,
  stagger: 0.1, 
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".contact-me-container",
    start: "top center",
    end: "bottom center",
  },
});
// CONTACT ME SECTION END






// CArds LINKS
document.querySelector("#p1").addEventListener("click", function() {
  window.location.href = "https://imbr3m.github.io/Deltarune/";
});
document.querySelector("#p2").addEventListener("click", function() {
  window.location.href = "https://imbr3m.github.io/Responsive_1/";
});
document.querySelector("#p3").addEventListener("click", function() {
  window.location.href = "https://rainer-toviel.itch.io/the-handsome-oracles-of-tim";
});
document.querySelector("#p4").addEventListener("click", function() {
  window.location.href = "https://github.com/Imbr3m/CODELAB-2--A2.git";
});
document.querySelector("#p5").addEventListener("click", function() {
  window.location.href = "https://imbr3m.github.io/Responsive_2/";
});

// CARD HOVER ANIMATION
mm.add("(min-width: 769px)", () => {
  gsap.to(".card", {
    y: -10,
    scale: 1.05, 
    duration: 0.3,
    ease: "power2.out",
    paused: true 
  });

  document.querySelectorAll(".card").forEach((card) => {
    let hoverAnimation = gsap.to(card, {
      y: -10,
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out",
      paused: true,
    });

    card.addEventListener("mouseenter", () => hoverAnimation.play());
    card.addEventListener("mouseleave", () => hoverAnimation.reverse());
  });
});