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
        ? 'Weniger anzeigen'
        : 'Weitere anzeigen';

      // Optional: bei "Weniger" wieder etwas nach oben scrollen (UX)
      // if (!willShow) {
      //   document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // }
    });
  }
        // ------------------------------------------------------------
    // ScrollSpy – FINAL FIX (richtiger Scroll-Container)
    // ------------------------------------------------------------
    const mainNav = document.getElementById('mainNav');

    if (mainNav && window.bootstrap) {
      let scrollSpy = new bootstrap.ScrollSpy(document.documentElement, {
        target: '#mainNav',
        offset: 160,
      });

      window.addEventListener('load', () => {
        scrollSpy.refresh();
      });

      window.addEventListener('resize', () => {
        scrollSpy.dispose();
        scrollSpy = new bootstrap.ScrollSpy(document.documentElement, {
          target: '#mainNav',
          offset: 160,
        });
      });
    }

          // ------------------------------------------------------------
      // Projekte – Scroll Animation (staggered)
      // ------------------------------------------------------------
      const projectItems = document.querySelectorAll('.portfolio-item');

      const projectObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                entry.target.classList.add('in-view');
              }, index * 350); // zeitversetzt
              projectObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );

      projectItems.forEach(item => projectObserver.observe(item));


              // ------------------------------------------------------------
        // Kontaktkarten – Slide In
        // ------------------------------------------------------------
        const contactCards = document.querySelectorAll('.contact-card');

        const contactObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                contactObserver.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.3 }
        );

        contactCards.forEach(card => contactObserver.observe(card));


        
        // ------------------------------------------------------------
        // Dienstleistungen – Reveal Effekt
        // ------------------------------------------------------------
        const serviceItems = document.querySelectorAll('.service-item');

        const serviceObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                serviceObserver.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.3 }
        );

        serviceItems.forEach(item => serviceObserver.observe(item));
        
      // ------------------------------------------------------------
      // Team-Bild – Slide In von unten
      // ------------------------------------------------------------
      const teamImage = document.querySelector('.team-image-wrapper');

      if (teamImage) {
        const teamObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                teamObserver.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.25 }
        );

        teamObserver.observe(teamImage);
      }


      
      // ------------------------------------------------------------
      // FIX: Carousel im Modal sofort aktivieren (Swipe + Keyboard)
      // ------------------------------------------------------------
      document.querySelectorAll('.portfolio-modal').forEach(modal => {
        modal.addEventListener('shown.bs.modal', () => {
          const carouselEl = modal.querySelector('.carousel');
          if (!carouselEl) return;

          // Carousel initialisieren / holen
          const carousel = bootstrap.Carousel.getOrCreateInstance(carouselEl, {
            interval: false,
            touch: true,
            keyboard: true
          });


});