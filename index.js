document.addEventListener('DOMContentLoaded', function () {
  const navBtn = document.querySelector('.nav-btn');
  const navLinks = document.querySelector('.nav-links');

  navBtn.addEventListener('click', function () {
    navLinks.classList.toggle('show');
  });
});