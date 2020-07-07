
let isTransparent = true;
const nav = document.getElementById("myHeader");

window.addEventListener('scroll', event => {
    if (window.pageYOffset > 70 && isTransparent) {
      nav.classList.add('_fixed');
        isTransparent = false;
      }

 if (window.pageYOffset <= 70 && !isTransparent) {
  nav.classList.remove('_fixed');
  isTransparent = true;
   }
    });

const nav1 = document.getElementById("logo_main");

window.addEventListener('scroll', event => {
    if (window.pageYOffset > 70 ) {
      nav1.classList.add('_fixed');
        
      }

 if (window.pageYOffset <= 70) {
  nav1.classList.remove('_fixed');
 
   }
    });