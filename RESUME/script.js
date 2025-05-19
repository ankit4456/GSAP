document.addEventListener('DOMContentLoaded', function () {
  // Master GSAP Timeline
  const masterTl = gsap.timeline();

  // Initial Loader Animation (Syncs with Main Animation)
  masterTl.to('.intro-logo', {
    duration: 1.5,
    scale: 1.2,
    rotate: 360,
    ease: 'power4.out'
  })
  .to('.intro-progress::after', {
    width: '100%',
    duration: 2,
    ease: 'power2.inOut'
  }, '-=1')
  .to('.intro-overlay', {
    opacity: 0,
    duration: 1,
    ease: 'power2.out',
    onComplete: () => {
      document.querySelector('.intro-overlay').style.display = 'none';
    }
  });

  // Navigation Animation
  masterTl.from('header #nav h2', {
    y: -30,
    opacity: 0,
    duration: 1.5,
    ease: 'power1.out'
  }, '-=0.5')
  .from('header #part2 h4', {
    y: -30,
    opacity: 0,
    duration: 0.5,
    stagger: 0.3,
    ease: 'power1.out'
  }, '-=0.8');

  // Hero Section Animation
  masterTl.from('#hero', {
    x: '-1000%',
    y: '-2000%',
    opacity: 0,
    duration: 1.5,
    ease: 'back.out(0.85)'
  })
  .from('#lol h1, #lol h3', {
    x: '-1000%',
    y: '-2000%',
    duration: 7,
    delay: -4.5,
    rotate: 180,
    borderRadius: '50%',
    scale: 700,
    stagger: 0.3
  })
  .from('#hi', {
    x: '-1000%',
    y: '-2000%',
    duration: 7,
    delay: -7,
    rotate: 50,
    borderRadius: '50%',
    scale: 90,
    stagger: 0.2
  })
  .from('#by', {
    x: 1000,
    y: 1000,
    distance: 1000,
    duration: 3,
    delay: 0,
    rotate: 180,
    borderRadius: '50%',
    scale: 70,
    ease: 'power4.out',
    transformOrigin: 'center center',
    autoAlpha: 0
  }).to('#by', {
    scale: 1,
    autoAlpha: 1,
    duration: 2,
    ease: 'power4.out'
  });

  // Greetings Animation (Synced)
  const greetings = ['こんにちは世界', 'Hello World', 'Hola Mundo', 'नमस्ते दुनिया', 'Bonjour le Monde', 'Ankit This Side'];
  const heroTitle = document.querySelector('.hero-title');
  let index = 0;

  function changeGreeting() {
    heroTitle.textContent = greetings[index];
    index = (index + 1) % greetings.length;
    gsap.to(heroTitle, { opacity: 1, duration: 0.5, y: 0, ease: 'power1.out' });
  }

  changeGreeting();
  setInterval(() => {
    gsap.to(heroTitle, { opacity: 0, duration: 0.5, y: 20, ease: 'power1.in', onComplete: changeGreeting });
  }, 3000);

  // Links Animation
  masterTl.from('#by a', {
    x: 100,
    y: 100,
    opacity: 0,
    duration: 0,
    delay:0,
    stagger: 0.2,
    ease: 'power4.out'
  });
});
