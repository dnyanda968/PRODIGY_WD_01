const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

nav.addEventListener('mouseover', (e) => {
  if (e.target.tagName === 'A') {
    nav.classList.add('hovered');
  }
});

nav.addEventListener('mouseout', () => {
  nav.classList.remove('hovered');
});
