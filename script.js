const email = 'test@yahoo.com';

function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('active');
}
if (window.location.pathname === '/index.html') {
    window.history.replaceState({}, document.title, '/');
}
function sendEmail() {
    const itemTitle = document.querySelector(".item-title").textContent.trim();
    const subject = encodeURIComponent(`Inquiry about ${itemTitle}`);
    const body = encodeURIComponent(
      `Hi Draft Horse Art,\n\nI'm interested in purchasing the ${itemTitle} art. Please let me know how to proceed.\n\nThank you!`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  }