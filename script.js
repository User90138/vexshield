document.addEventListener('DOMContentLoaded', () => {
  // Плавное появление основных секций
  const hero = document.querySelector('.hero');
  const features = document.querySelector('.features');

  if (hero) hero.classList.add('fade-in');
  if (features) features.classList.add('fade-in-delay');

  // Подсветка активной ссылки при клике
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });
});

