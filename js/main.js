const body = document.body;
const themeToggle = document.querySelector('.theme-toggle');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const year = document.querySelector('#year');

const savedTheme = localStorage.getItem('portfolio-theme');

if (savedTheme === 'dark') {
  body.classList.add('dark-theme');
  themeToggle.textContent = 'Light';
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  const isDark = body.classList.contains('dark-theme');
  themeToggle.textContent = isDark ? 'Light' : 'Dark';
  localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
});

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

year.textContent = new Date().getFullYear();
