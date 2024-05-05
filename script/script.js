/*---HEADER---*/

  
  

/*---CHPT1---*/
const chpt1 = document.querySelector("#chapitre-01");
gsap.timeline({repeat: Infinity})
  .from("#chapitre-01 .chat-orange", { duration: 3, y: "-10%", })
  .to("#chapitre-01 .chat-orange", { duration: 3, y: "10%", })
  .to("#chapitre-01 .chat-orange", { duration: 3, y: "-10%", });

gsap.timeline({repeat: Infinity})
  
  document.addEventListener("DOMContentLoaded", function() {
    const chatOrange = document.querySelector('#chapitre-01 .chat-orange');
    
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.to(chatOrange, {
      duration: 3,
      x: "-100%",
      y: "10%",
      scrollTrigger: {
        trigger: "#chapitre-01",
        pin: true,
        start: "top top",
        end: "200%",
        scrub: true
      }
    });

    gsap.to(chatOrange, {
      duration: 5,
      x: "-220%",
      y: "10%",
      scale: 0.5,
      scrollTrigger: {
        trigger: "#chapitre-01",
        start: "top top",
        end: "200%",
        scrub: true
      }
    });
});


/*---CHPT2---*/

const chpt2 = document.querySelector("#chapitre-02");
const chat2 = document.querySelector('#chat2');

gsap.timeline({repeat: Infinity})
  .from("#chapitre-02 .chat-orange", { duration: 3, x: "50%", })
  .to("#chapitre-02 .chat-orange", { duration: 3, x: "100%", })
  .to("#chapitre-02 .chat-orange", { duration: 3, x: "50%", });

document.addEventListener("DOMContentLoaded", function() {
    const chat2 = document.querySelector('#chat2');
  
    gsap.registerPlugin(ScrollTrigger);
  
    gsap.to(chat2, {
      opacity: 1,
      scrollTrigger: {
        trigger: "#chapitre-02",
        start: "10vh",
        end: "650vh",
        scrub: true
      }
    });
  
    gsap.to(chat2, {
      opacity: 0,
      scrollTrigger: {
        trigger: "#chapitre-03",
        start: "650vh",
        end: "651vh", // 
        scrub: true
      }
    });
  });

/*---CHPT3---*/

const bulles = document.querySelector("#bulles");
const chpt3 = document.querySelector("#chapitre-03");
const chat3 = document.querySelector('#chat3');

gsap.timeline({repeat: Infinity})
  .from("#chapitre-03 .chat3", { duration: 3, y: "-10%", })
  .to("#chapitre-03 .chat3", { duration: 3, y: "10%", })
  .to("#chapitre-03 .chat3", { duration: 3, y: "-10%", });

gsap.timeline({repeat: Infinity})
  .from("#chapitre-03 .bulles", { duration: 5, y: "-10%", })
  .to("#chapitre-03 .bulles", { duration: 5, y: "10%", })
  .to("#chapitre-03 .bulles", { duration: 5, y: "-10%", });
 

document.addEventListener("DOMContentLoaded", function() {
const chat3 = document.querySelector('#chat3');
  
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(chat3, {
      xPercent: 900, 
      scrollTrigger: {
        trigger: "#chapitre-03",
        pin: true, 
        start: "top top", 
        end: "+=200%", 
        scrub: true 
      }
    });
  });

/*---CHPT4---*/

const chpt4 = document.querySelector("#chapitre-04");

gsap.timeline({repeat: Infinity})
  .from("#chapitre-04 .chat4", { duration: 3, y: "-10%", })
  .to("#chapitre-04 .chat4", { duration: 4, y: "10%", })
  .to("#chapitre-04 .chat4", { duration: 3, y: "-10%", });

gsap.timeline({repeat: Infinity})
  .from("#chapitre-04 .bulles2", { duration: 5, y: "-10%", })
  .to("#chapitre-04 .bulles2", { duration: 4, y: "10%", })
  .to("#chapitre-04 .bulles2", { duration: 5, y: "-10%", });
 
gsap.timeline({repeat: Infinity})
  .from("#chapitre-04 .poisson-bleu-orange", { duration: 7, y: "-10%", })
  .to("#chapitre-04 .poisson-bleu-orange", { duration: 8, y: "10%", })
  .to("#chapitre-04 .poisson-bleu-orange", { duration: 7, y: "-10%", });


gsap.timeline({repeat: Infinity})
  .from("#chapitre-04 .poisson-rose", { duration: 9, y: "-10%", })
  .to("#chapitre-04 .poisson-rose", { duration: 7, y: "10%", })
  .to("#chapitre-04 .poisson-rose", { duration: 9, y: "-10%", });

gsap.timeline({repeat: Infinity})
  .from("#chapitre-04 .poisson-bleu-foncer", { duration: 5, y: "-10%", })
  .to("#chapitre-04 .poisson-bleu-foncer", { duration: 3, y: "10%", })
  .to("#chapitre-04 .poisson-bleu-foncer", { duration: 7, y: "-10%", });
  

document.addEventListener("DOMContentLoaded", function() {
    const chat4 = document.querySelector('#chat4');
      
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(chat4, {
          xPercent: 900, 
          scrollTrigger: {
            trigger: "#chapitre-04",
            pin: true, 
            start: "top top", 
            end: "+=200%", 
            scrub: true 

          }
          
        });
        const poisson1 = document.querySelector('#poisson1')
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(poisson1, {
          xPercent: -400, 
          scrollTrigger: {
            trigger: "#chapitre-04",
            pin: true, 
            start: "top top", 
            end: "+=200%", 
            scrub: true 

          }
          
        });

        const poisson2 = document.querySelector('#poisson2')
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(poisson2, {
          xPercent: 500, 
          scrollTrigger: {
            trigger: "#chapitre-04",
            pin: true, 
            start: "top top", 
            end: "+=200%", 
            scrub: true 

          }
          
        });

        const poisson3 = document.querySelector('#poisson3')
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(poisson3, {
          xPercent: -600, 
          scrollTrigger: {
            trigger: "#chapitre-04",
            pin: true, 
            start: "top top", 
            end: "+=200%", 
            scrub: true 

          }
          
        });


      });

/*---CHPT5---*/

gsap.timeline({repeat: Infinity})
  .from("#chapitre-05 .bulles3", { duration: 5, y: "-10%", })
  .to("#chapitre-05 .bulles3", { duration: 4, y: "10%", })
  .to("#chapitre-05 .bulles3", { duration: 5, y: "-10%", });

gsap.timeline({repeat: Infinity})
  .from("#chapitre-05 .chat5", { duration: 3, y: "-10%", })
  .to("#chapitre-05 .chat5", { duration: 4, y: "10%", })
  .to("#chapitre-05 .chat5", { duration: 3, y: "-10%", });

gsap.timeline({repeat: Infinity})
  .from("#chapitre-05 .sprite-sheet-poisson", { duration: 2, y: "-10%", })
  .to("#chapitre-05 .sprite-sheet-poisson", { duration: 2, y: "10%", })
  .to("#chapitre-05 .sprite-sheet-poisson", { duration: 5, y: "-10%", });

  gsap.timeline({repeat: Infinity})
  .from("#chapitre-05 .raie", { duration: 2, y: "-10%", })
  .to("#chapitre-05 .raie", { duration: 2, y: "10%", })
  .to("#chapitre-05 .raie", { duration: 5, y: "-10%", });

  const chpt5 = document.querySelector("#chapitre-05");

  document.addEventListener("DOMContentLoaded", function() {

    const chat5 = document.querySelector('#chat5');
      
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(chat5, {
          xPercent: -200, 
          scrollTrigger: {
            trigger: "#chapitre-05",
            pin: true, 
            start: "top top", 
            end: "+=200%", 
            scrub: true 
          }
        });
      });


      document.addEventListener("DOMContentLoaded", function() {
        const raie = document.querySelector('#raie');
      
        gsap.registerPlugin(ScrollTrigger);
      
        gsap.to(raie, {
          xPercent: 100,
          rotation: 180, 
          yPercent: -160, 
          scrollTrigger: {
            trigger: "#chapitre-05",
            pin: true,
            start: "top top",
            end: "+=200%",
            scrub: true
          }
        });
      });


/*---CHPT6---*/
gsap.timeline({repeat: Infinity})
  .from("#chapitre-06 .bulles4", { duration: 5, y: "-10%", })
  .to("#chapitre-06 .bulles4", { duration: 4, y: "10%", })
  .to("#chapitre-06 .bulles4", { duration: 5, y: "-10%", });

gsap.timeline({repeat: Infinity})
  .from("#chapitre-06 .chat6", { duration: 3, y: "-10%", })
  .to("#chapitre-06 .chat6", { duration: 4, y: "10%", })
  .to("#chapitre-06 .chat6", { duration: 3, y: "-10%", });

  gsap.timeline({repeat: Infinity})
  .from("#chapitre-06 .sprite-sheet-poisson", { duration: 2, y: "-10%", })
  .to("#chapitre-06 .sprite-sheet-poisson", { duration: 2, y: "10%", })
  .to("#chapitre-06 .sprite-sheet-poisson", { duration: 5, y: "-10%", });

gsap.timeline({repeat: Infinity})
  .from("#chapitre-06 .personnage-mauve", { duration: 2, y: "-10%", })
  .to("#chapitre-06 .personnage-mauve", { duration: 5, y: "5%", })
  .to("#chapitre-06 .personnage-mauve", { duration: 3, y: "-10%", });

  const chpt6 = document.querySelector("#chapitre-06");

  document.addEventListener("DOMContentLoaded", function() {

    const chat6 = document.querySelector('#chat6');
      
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(chat6, {
          xPercent: 180, 
          scrollTrigger: {
            trigger: "#chapitre-06",
            pin: true, 
            start: "top top", 
            end: "+=200%", 
            scrub: true 
          }
        });

        const persomauve1 = document.querySelector('#persomauve1')
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(persomauve1, {
          xPercent: -200, 
          scrollTrigger: {
            trigger: "#chapitre-06",
            pin: true, 
            start: "top top", 
            end: "+=200%", 
            scrub: true 

          }
          
        });


      });

      document.addEventListener("DOMContentLoaded", function() {
        const poissonElement = document.querySelector('.sprite-sheet-poisson');
    
        gsap.registerPlugin(ScrollTrigger);
    
        gsap.to(poissonElement, {
            scrollTrigger: {
                trigger: "#chapitre-06",
                start: "top top",
                end: "bottom bottom",
                scrub: true,
            },
            onComplete: function() {
                poissonElement.classList.add('is-scrolling');
            },
            onReverseComplete: function() {
                poissonElement.classList.remove('is-scrolling');
            }
        });
    });
   
  
      



/*---CHPT7---*/
gsap.timeline({repeat: Infinity})
  .from("#chapitre-07 .bulles5", { duration: 5, y: "-10%", })
  .to("#chapitre-07 .bulles5", { duration: 4, y: "10%", })
  .to("#chapitre-07 .bulles5", { duration: 5, y: "-10%", });

gsap.timeline({repeat: Infinity})
  .from("#chapitre-07 .chat7", { duration: 3, y: "-10%", })
  .to("#chapitre-07 .chat7", { duration: 4, y: "10%", })
  .to("#chapitre-07 .chat7", { duration: 3, y: "-10%", });


gsap.timeline({repeat: Infinity})
  .from("#chapitre-07 .personnage-mauve", { duration: 3, y: "-10%", })
  .to("#chapitre-07 .personnage-mauve", { duration: 4, y: "10%", })
  .to("#chapitre-07 .personnage-mauve", { duration: 3, y: "-10%", });

  document.addEventListener("DOMContentLoaded", function() {
    const chat7 = document.querySelector('#chat7');
  
    gsap.registerPlugin(ScrollTrigger);
  
    gsap.to(chat7, {
      opacity: 1,
      scrollTrigger: {
        trigger: "#chapitre-07",
        start: "10vh",
        end: "650vh",
        scrub: true
      }
    });
  
    gsap.to(chat7, {
      opacity: 0,
      scrollTrigger: {
        trigger: "#chapitre-08",
        start: "650vh",
        end: "651vh", // 
        scrub: true
      }
    });
  });



/*---CHPT8---*/

let circle = document.querySelector("#circle");
let anim1 = gsap.to(circle,{ 
  morphSVG: {
    shape: "#etoile",
    

  },
  repeat: -1,
  yoyo: true 
});

let circles = document.querySelector("#circles");
let anim2 = gsap.to(circles,{ 
  morphSVG: {
    shape: "#etoiles",
    

  },
  repeat: -1,
  yoyo: true 
});


let circless = document.querySelector("#circless");
let anim3 = gsap.to(circless,{ 
  morphSVG: {
    shape: "#etoiless",
    

  },
  repeat: -1,
  yoyo: true 
});

let circlesss = document.querySelector("#circlesss");
let anim4 = gsap.to(circlesss,{ 
  morphSVG: {
    shape: "#etoilesss",
    

  },
  repeat: -1,
  yoyo: true 
});


let circlessss = document.querySelector("#circlessss");
let anim5 = gsap.to(circlessss,{ 
  morphSVG: {
    shape: "#etoilessss",
    

  },
  repeat: -1,
  yoyo: true 
});




gsap.timeline({repeat: Infinity})
  .from("#chapitre-08 .chat8", { duration: 3, y: "-10%", })
  .to("#chapitre-08 .chat8", { duration: 4, y: "10%", })
  .to("#chapitre-08 .chat8", { duration: 3, y: "-10%", });


  
  


