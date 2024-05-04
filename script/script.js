//INDEX
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(MotionPathPlugin)


const intro = document.querySelector('#intro');
const chapitre1 = document.querySelector('#chpt1');
const chapitre2 = document.querySelector('#chpt2');
const chapitre3 = document.querySelector('#chpt3');
const chapitre4 = document.querySelector('#chpt4');
const chapitre5 = document.querySelector('#chpt5');
const chapitre6 = document.querySelector('#chpt6');
const chapitre7 = document.querySelector('#chpt7');
const chapitre8 = document.querySelector('#chpt8');
const bodyIndex = document.querySelector('body');
const chap1SpriteChat = document.querySelector('#chpt1.blinkfloat');
const fleche1 = document.querySelector('fleche');




const techniqueGsap = document.querySelector('.technique-gsap');
let scrollIndex;
if (techniqueGsap != null) {
    window.addEventListener('scroll', () => {
    });

    function removeClassIsScrolling() {
      bodyIndex.classList.remove('is-scrolling');
    }
}

gsap.to(".intro", {
    scrollTrigger: {
        pin: true,
      scrub: true,
      markers: true,
      trigger: ".intro",
    }
});
    

  gsap.to('.chpt1', {
    scrollTrigger: {
      trigger: '.chpt1',
      start: '50% 75%',
      end: '50% 25%',
      markers: true,
      scrub: 0.25,
    },
    x: '100%',
    duration: 2,
  });
 


  //chpt1

  if (!CSS.supports('animation-timeline: scroll()') && matchMedia('(prefers-reduced-motion: no-preference)')) {
    gsap.registerPlugin(ScrollTrigger)
  
    const scrub = 0.2
    const trigger = 'intro'
  
    gsap.set('p > span', {
      '--progress': 0,
      backgroundPositionX: 'calc(-100vmax + (var(--progress) * 100vmax)), calc(-100vmax + (var(--progress) * 100vmax)), 0',
      color: 'transparent',
    })
    gsap.to('p > span', {
      '--progress': 1,
        duration: 40,
        scrollTrigger: {
        pin: true,
        trigger: '#chpt1',
        scrub,
        start: 'top 10%',
        end: '150% 0',
      }
    })
    gsap.to('p > span', {
    duration: 40,
      color: 'white',
      scrollTrigger: {
        trigger: '#chpt1',
        pin: true,
        scrub,
        start: 'top 0%',
        end: '180% 5%',
      }
    })
  }

  let timeline1 = gsap.timeline({
    duration: 40,
    scrollTrigger: {
        markers: true,
        scrub: true,
        trigger: '#chpt1',
        start: 'top 10%',
        end: '150% 0',
        toggleActions: 'play pause reverse pause',
    }
}).to('#chapitre1', {
    backgroundPosition: "-10% 0",
    ease: "ease.out",
    scrollTrigger: {
        markers: true,
        scrub: true,
        trigger: '#chpt1',
        start: 'top 0%',
        end: '180% 5%',
        pin: true,
    }
})

















