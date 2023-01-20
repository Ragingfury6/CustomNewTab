import VanillaTilt from 'vanilla-tilt';

const linkCards: HTMLElement[] = Array.from(
  document.querySelectorAll('.link__card')
);
linkCards.forEach((c) => {
  VanillaTilt.init(c, {
    max: 15,
    speed: 400,
    scale: 1.05,
    transition: true,
    glare: true,
    'max-glare': 0.75,
  });
});
