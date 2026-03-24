/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
//

window.addEventListener('DOMContentLoaded', event => {

  // Navbar shrink function
  const navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector('#mainNav');
    if (!navbarCollapsible) {
      return;
    }

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

  // ============================================================
  // Projects toggle (show/hide extra projects)
  // Requires:
  //  - extra projects have class: .extra-project
  //  - CSS: .extra-project { display:none; } (or class-based toggle)
  //  - button: id="toggleProjects"
  // ============================================================

  const toggleBtn = document.getElementById('toggleProjects');

  if (toggleBtn) {
    toggleBtn.addEventListener('click', function () {
      const extras = document.querySelectorAll('.extra-project');
      console.log('Button geklickt');
      console.log('Extras gefunden:', extras.length);

      if (!extras.length) return;

      // Detect current state (hidden via CSS)
      const isHidden = getComputedStyle(extras[0]).display === 'none';

      // Option A: inline toggle (works if no !important overrides)
      extras.forEach(el => {
        el.style.display = isHidden ? '' : 'none';
      });

      // Update button label
      toggleBtn.textContent = isHidden
        ? 'Weniger Projekte anzeigen'
        : 'Weitere Projekte anzeigen';
    });
  }

});