function toggleNavbar() {
  const navbarLinks = document.getElementById('navbar-links');
  if (navbarLinks.style.display === 'block') {
    navbarLinks.style.display = 'none';
  } else {
    navbarLinks.style.display = 'block';
  }
}
