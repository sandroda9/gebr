window.addEventListener('DOMContentLoaded', event => {

  // Navbar shrink function
  const navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector('#mainNav');
    if (!navbarCollapsible) return;

    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove('navbar-shrink');
    } else {
      navbarCollapsible.classList.add('navbar-shrink');
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener('scroll', navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector('#mainNav');
  if (mainNav && window.bootstrap) {
    new bootstrap.ScrollSpy(document.body, {
      target: '#mainNav',
      rootMargin: '0px 0px -40%',
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector('.navbar-toggler');
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll('#navbarResponsive .nav-link')
  );

  responsiveNavItems.forEach(function (responsiveNavItem) {
    responsiveNavItem.addEventListener('click', () => {
      if (navbarToggler && window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarToggler.click();
      }
    });
  });

  // ✅ Toggle projects (3 weitere anzeigen)
  const toggleBtn = document.getElementById('toggleProjects');

  if (toggleBtn) {
    toggleBtn.addEventListener('click', function () {
      console.log('Button geklickt');

      const extras = document.querySelectorAll('.extra-project');
      console.log('Extras gefunden:', extras.length);
      if (!extras.length) return;

      const isHidden = getComputedStyle(extras[0]).display === 'none';

      extras.forEach(el => {
        el.style.display = isHidden ? '' : 'none';
      });

      toggleBtn.textContent = isHidden
        ? 'Weniger Projekte anzeigen'
        : 'Weitere Projekte anzeigen';
    });
  }

});