// frappe.ready(function() {
//     console.log(window.location.pathname,"harshit")
//     if (window.location.pathname === '/app/home') {
//       const container = document.querySelector('.page-head.flex .container');
//       if (container) {
//         container.style.display = 'none';
//       }
//     }
//   });



  document.addEventListener('DOMContentLoaded', function () {
    if (window.location.pathname === '/app/home') {
      const container = document.querySelector('.page-head.flex .container');
      if (container) {
        container.style.display = 'none';
      }
    }
  });
  
  