
document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.main-nav a');
  const currentPage = window.location.pathname.split('/').pop();
  console.log('Current page:', currentPage);
  links.forEach(link => {
    const linkPage = link.getAttribute('href').split('/').pop();
    console.log('Checking link:', linkPage);
    if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
      console.log('Match found, adding active class to:', linkPage);
      link.classList.add('active');
      link.parentElement.classList.add('active');
    }
  });
});
