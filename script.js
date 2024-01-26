let hamburgur = document.querySelector('.menu-icon');
let cancelBtn = document.querySelector('.cancel');
let hamSlider = document.querySelector('.ham-slider');
let content = document.querySelector('.content');
let compnies = document.querySelector('.company-container');
let features = document.querySelector('.feature-container');
let testimonial = document.querySelector('.testimonial-conainer');
let newsletter = document.querySelector('.newsletter-container');
let footer = document.querySelector('.footer-container');

hamburgur.addEventListener('click',() => {
    hamSlider.style.transform = 'translateX(0)';
    content.style.filter = 'blur(2.5px)'
    compnies.style.filter = 'blur(2.5px)'
    features.style.filter = 'blur(2.5px)'
    testimonial.style.filter = 'blur(2.5px)'
    newsletter.style.filter = 'blur(2.5px)'
    footer.style.filter = 'blur(2.5px)'
});

cancelBtn.addEventListener('click', () => {
    hamSlider.style.transform = 'translateX(100%)';
    content.style.filter = 'blur(0px)'
    compnies.style.filter = 'blur(0px)'
    features.style.filter = 'blur(0px)'
    testimonial.style.filter = 'blur(0px)'
    newsletter.style.filter = 'blur(0px)'
    footer.style.filter = 'blur(0px)'
});

// gsap scrollTrigger
gsap.from('.image-container',{
    duration:0.3,
    scale:1,
    scrollTrigger:{
        trigger:'.image-container',
        scroller:'body',
        scrub:1,
        start:'top 30%',
    }
});

gsap.to('.compny-grid',{
    duration:0.3,
    x:400,
    scrollTrigger:{
        trigger:'.compny-grid',
        scroller:'body',
        top:'30%',
        scrub:1,
        start:'top 60%',
    }
});

gsap.to('.feature-card',{
    duration:0.3,
    scale:1,
    scrollTrigger:{
        trigger:'.feature-card',
        scroller:'body',
        top:'30%',
        scrub:1,
        start:'top 85%',
    }
});

gsap.to('.testimonial-card',{
    duration:0.3,
    scale:1,
    scrollTrigger:{
        trigger:'.testimonial-card',
        scroller:'body',
        top:'10%',
        scrub:1,
        start:'top 85%',
    }
});
