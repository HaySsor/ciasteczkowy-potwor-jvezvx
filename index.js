// Import stylesheets
import './style.css';


hendelCookie()
function hendelCookie() {
  const acceptedMyCookie = localStorage.getItem('MyCookie');
  const cookiepopupDiv = document.querySelector('[data-popup]');
    if (acceptedMyCookie) {
      close(cookiepopupDiv)
    } else {
      const cookiepopupButton = document.querySelector('[data-popup-button]');
      cookiepopupButton.addEventListener('click',()=>{
        localStorage.setItem('MyCookie', true);
        close(cookiepopupDiv)
      })
    }
}


function close(element) {
  element.classList.add('close');
}
