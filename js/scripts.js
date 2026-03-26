/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
//

window.addEventListener('DOMContentLoaded', event => {

  // ------------------------------------------------------------
  // Navbar shrink function
  // ------------------------------------------------------------
  const navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector('#mainNav');
    if (!navbarCollapsible) return;

    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove('navbar-shrink');
    } else {
      navbarCollapsible.classList.add('navbar-shrink');
    }
  };

  navbarShrink();
  document.addEventListener('scroll', navbarShrink);


  // ------------------------------------------------------------
  // Collapse responsive navbar when toggler is visible
  // ------------------------------------------------------------
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

  // ------------------------------------------------------------
  // Projects toggle 
  // Voraussetzungen:
  //  - Projekte 4–6 haben die Klasse: extra-project
  //  - CSS:
  //      .extra-project { display:none !important; }
  //      .extra-project.show { display:block !important; }
  //  - Button hat: id="toggleProjects"
  // ------------------------------------------------------------
  const toggleBtn = document.getElementById('toggleProjects');

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const extras = document.querySelectorAll('.extra-project');
      if (!extras.length) return;

      // Wenn das erste Extra NICHT "show" hat, sind sie aktuell versteckt
      const willShow = !extras[0].classList.contains('show');

      extras.forEach(el => {
        el.classList.toggle('show', willShow);
      });

      toggleBtn.textContent = willShow
        ? 'Weniger Projekte anzeigen'
        : 'Weitere Projekte anzeigen';

      // Optional: bei "Weniger" wieder etwas nach oben scrollen (UX)
      // if (!willShow) {
      //   document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // }
    });
  }
      // ------------------------------------------------------------
      // ScrollSpy – RESPONSIVE FIX
      // ------------------------------------------------------------
      const mainNav = document.getElementById('mainNav');

      if (mainNav && window.bootstrap) {
        const getOffset = () => {
          return window.innerWidth < 992
            ? 200   // Mobile / Tablet
            : 300;  // Desktop
        };

        let scrollSpy = new bootstrap.ScrollSpy(document.body, {
          target: '#mainNav',
          offset: getOffset(),
        });

        // Re-init bei Resize (wichtig!)
        window.addEventListener('resize', () => {
          scrollSpy.dispose();
          scrollSpy = new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: getOffset(),
          });
        });

        window.addEventListener('load', () => {
          scrollSpy.refresh();
        });
      }

});