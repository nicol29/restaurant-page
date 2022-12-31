import loadHomePage from './home.js';
import loadAboutPage from './about.js'
import './style.css';

loadHomePage('Home');

let contentContainer = document.querySelector('#content');
let navBars = document.querySelectorAll('.nav-content');

navBars.forEach(heading => heading.addEventListener('click', () => {
  if(heading.innerText === 'About') {
    contentContainer.textContent = '';
    loadAboutPage('About');
  }
}));