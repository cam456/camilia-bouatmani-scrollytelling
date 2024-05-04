//INDEX
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(MotionPathPlugin)
import gsap from 'https://cdn.skypack.dev/gsap@3.12.0'
import { ScrollTrigger } from 'https://cdn.skypack.dev/gsap@3.12.0/ScrollTrigger'

const intro - document.querySelector('#intro')
const chapitre1 = document.querySelector('#chpt1');
const chapitre2 = document.querySelector('#chpt2');
const chapitre3 = document.querySelector('#chpt3');
const chapitre4 = document.querySelector('#chpt4');
const chapitre5 = document.querySelector('#chpt5');
const chapitre6 = document.querySelector('#chpt6');
const chapitre7 = document.querySelector('#chpt7');
const chapitre8 = document.querySelector('#chpt8');
const bodyIndex = document.querySelector('body');
const chap1SpriteChat = document.querySelector('#chpt1 .blinkfloat')
const fleche1 = document.querySelector('fleche')



const techniqueGsap = document.querySelector('.technique-gsap');
let scrollIndex;
if (techniqueGsap != null) {
    window.addEventListener('scroll', () => {
    });

    function removeClassIsScrolling() {
      bodyIndex.classList.remove('is-scrolling');
    }
}

const video = document.querySelector(".intro");
 
  gsap.to(".introduction", {
    scrollTrigger: {
      pin: true,
      scrub: true,
      markers: true,
      trigger: ".introduction",
    }
  });
    
  const no2 = document.querySelector('chap');

  gsap.to('.no2', {
    scrollTrigger: {
      trigger: '.no2',
      start: '50% 75%',
      end: '50% 25%',
      markers: true,
      scrub: 0.25,
      onUpdate: (e) => {
        no2.innerText = e.progress;
      }
    },
    x: '100%',
    duration: 2,
  });
 


















