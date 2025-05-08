/**
 * Scroll reveal animation utility
 * This adds smooth reveal animations to elements with the "reveal" class
 * as they enter the viewport during scrolling
 */
export function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  
  // Add visible class to elements already in viewport on page load
  window.addEventListener('DOMContentLoaded', () => {
    checkReveal();
    
    // The page transition container should be visible after page load
    const pageTransitionContainer = document.querySelector('.page-transition-container');
    if (pageTransitionContainer) {
      setTimeout(() => {
        pageTransitionContainer.classList.add('visible');
      }, 100);
    }
  });
  
  // Check for new elements to reveal on scroll
  window.addEventListener('scroll', checkReveal);
  
  function checkReveal() {
    const triggerBottom = window.innerHeight * 0.85;
    
    revealElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      
      if (elementTop < triggerBottom) {
        element.classList.add('active');
      }
    });
  }
}

/**
 * Main scroll handling function
 * - Handles smooth scroll behavior
 * - Initializes reveal animations
 * - Adds back-to-top button functionality
 */
export function initScrollHandling() {
  // Initialize scroll reveal
  initScrollReveal();
  
  // Back to top button behavior
  const backToTopButton = document.getElementById('backToTop');
  
  if (backToTopButton) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopButton.classList.remove('opacity-0', 'invisible');
        backToTopButton.classList.add('opacity-100', 'visible');
      } else {
        backToTopButton.classList.remove('opacity-100', 'visible');
        backToTopButton.classList.add('opacity-0', 'invisible');
      }
    });
  }
}