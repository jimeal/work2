window.addEventListener("DOMContentLoaded", () => {
  const spyEls = document.querySelectorAll('.scroll-spy');

  spyEls.forEach(function(spyEl) {
      new ScrollMagic
          .Scene({
              triggerElement: spyEl,
              triggerHook: .8
          })
          .setClassToggle(spyEl, 'show')
          .addTo(new ScrollMagic.Controller());
  });

  const vsOpts = {
    slides: document.querySelectorAll('.v-slide'),
    list: document.querySelector('.v-slides'),
    duration: 0.45,
    lineHeight: 130
  }
  const vSlide = gsap.timeline({
    paused: true,
    repeat: -1
  });

  vsOpts.slides.forEach(function(slide, i) {
    let letters = new SplitType(slide).chars;
    let tween = gsap.from(letters, {
      duration: vsOpts.duration,
      y: 130,
      repeat: 1,
      yoyo: true,
      stagger: vsOpts.duration / 5,
      repeatDelay: 1,
    });

    vSlide.add(tween);
  })

  const vsOptsMo = {
    slides: document.querySelectorAll('.v-slide-mo'),
    list: document.querySelector('.v-slides-mo'),
    duration: 0.45,
    lineHeight: 130
  }
  const vSlide2 = gsap.timeline({
    paused: true,
    repeat: -1
  });

  vsOptsMo.slides.forEach(function(slide, i) {
    let letters2 = new SplitType(slide).chars;
    let tween2 = gsap.from(letters2, {
      duration: vsOptsMo.duration,
      y: 36,
      repeat: 1,
      yoyo: true,
      stagger: vsOptsMo.duration / 5,
      repeatDelay: 1,
    });

    vSlide2.add(tween2);
  })

  vSlide.play();
  vSlide2.play();
})
