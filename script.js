function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('active');
}
if (window.location.pathname === '/index.html') {
    window.history.replaceState({}, document.title, '/');
}
