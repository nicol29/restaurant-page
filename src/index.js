import loadHomePage from './home.js';
import loadAboutPage from './about.js'
import { loadOtherElements } from './home.js';
import './style.css';

loadHomePage('Home');

let contentContainer = document.querySelector('#content');
let navBars = document.querySelectorAll('.nav-content');

navBars.forEach(heading => heading.addEventListener('click', () => {
  if(heading.innerText === 'About') {
    keepFirstChild();
    heading.classList.add('current-page');
    loadAboutPage();
  } else if(heading.innerText === 'Contact') {
    keepFirstChild();
    heading.classList.add('current-page');
    loadAboutPage();
  } else if(heading.innerText === 'Home') {
    keepFirstChild();
    heading.classList.add('current-page');
    loadOtherElements();
  }
}));

let keepFirstChild = () => {
  while(contentContainer.childNodes.length > 1){
    contentContainer.removeChild(contentContainer.lastChild);
  } 
  removeHightlightedTab();
}

let removeHightlightedTab = () => {
  navBars.forEach(heading => {
    heading.classList.remove('current-page');
  });
}