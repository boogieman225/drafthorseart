function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('active');
}
if (window.location.pathname === '/index.html') {
    window.history.replaceState({}, document.title, '/');
}
if (window.location.pathname.endsWith('.html')) {
    const newPath = window.location.pathname.replace(/\.html$/, '');
    window.history.replaceState({}, document.title, newPath);
}
