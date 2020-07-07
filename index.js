//first code

let isTransparent = true;
const nav = document.getElementById("myHeader");                                              
window.addEventListener('scroll', event => {
    if (window.pageYOffset > 70 && isTransparent) 
     {
     nav.classList.add('_fixed');
     isTransparent = false;
     }
    if (window.pageYOffset <= 70 && !isTransparent) 
     {
     nav.classList.remove('_fixed');
     isTransparent = true;
     }
    });

//second code

const nav1 = document.getElementById("logo_main");
window.addEventListener('scroll', event => 
   {
    if (window.pageYOffset > 70 ) 
     {
     nav1.classList.add('_fixed');
     }
    if (window.pageYOffset <= 70) 
     {
     nav1.classList.remove('_fixed');
     }
    });
    
/*the above two scripts are used to add a new class, so that  when the page is scrolled down
     the header gets a new style and it will be animated to a small size and more space to view content */
function myFunction() 
    {
    document.getElementById("contact-form").reset();
    }