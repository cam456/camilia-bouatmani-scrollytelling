//INDEX
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(MotionPathPlugin)

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


let timeline = gsap.timeline().from(['.fleche-down1'], {
    duration: 0.8,
    opacity: 0,
    repeat: -1,
    ease: 'slow',
    stagger: {
        each: 0.5,
    },
})


const techniqueGsap = document.querySelector('.technique-gsap');
let scrollIndex;
if (techniqueGsap != null) {
    window.addEventListener('scroll', () => {
        bodyIndex.classList.add('is-scrolling');
        window.clearTimeout(scrollIndex);
        scrollIndex = setTimeout(removeClassIsScrolling, 100);
    });

    function removeClassIsScrolling() {
        bodyIndex.classList.remove('is-scrolling');
    }
}