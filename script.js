// Mobile menu toggle
const navToggle = document.getElementById('nav-toggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
  navToggle.textContent = nav.classList.contains('active') ? '✕' : '☰';
});

// Close menu when clicking a link (mobile)
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    navToggle.textContent = '☰';
  });
});

// Current year in footer
document.getElementById('year').textContent = new Date().getFullYear();