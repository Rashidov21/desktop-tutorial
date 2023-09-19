import { hasClass, removeClass, addClass } from '../util/utilities';

document.addEventListener("DOMContentLoaded", function() {
  // Sidebar toggle
  const toggleElements = document.querySelectorAll('.sidebar-toggle');

  Array.from(toggleElements).forEach(element => {
    element.addEventListener('click', event => {
      const sidebar = document.getElementById('#sidebar');
      if (hasClass(sidebar, 'in')) {
        removeClass(sidebar, 'in');
      } else {
        addClass(sidebar, 'in');
      }
    });
  });
});