import companyLogo from './chicken-logo.png';
import accountOutline from './account-outline.png';
import backgroundChickenImage from './chicken-bg-image.jpg';
import iosBadge from './Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg';
import androidBadge from './google-play-badge.png';
import facebookIcon from './facebook.png';
import twitterIcon from './twitter.png';
import instagramIcon from './instagram.png';

const loadHomePage = (currentTab) => {
  let contentContainer = document.querySelector('#content');

  let headerSection = createHeader(currentTab);
  let bgImageSection = createBackgroundImage();
  let downloadSection = createDownloadContent();
  let footerSection = createFooter();

  contentContainer.append(headerSection, bgImageSection, downloadSection, footerSection);
}

export default loadHomePage;

export const loadOtherElements = () => {
  let contentContainer = document.querySelector('#content');

  let bgImageSection = createBackgroundImage();
  let downloadSection = createDownloadContent();
  let footerSection = createFooter();

  contentContainer.append(bgImageSection, downloadSection, footerSection);
}

export const createHeader = (currentTab) => {
  let header = document.createElement('header');

  let logo = document.createElement('img');
  logo.src = companyLogo;
  logo.alt = 'background image';

  let verticalBar = document.createElement('div');
  verticalBar.classList.add('vertical-bar');

  let navBar = document.createElement('div');
  navBar.classList.add('nav-bar');

  let navContentOne = document.createElement('div');
  navContentOne.classList.add('nav-content');
  navContentOne.innerText = 'Home';
  let navContentTwo = document.createElement('div');
  navContentTwo.classList.add('nav-content');
  navContentTwo.innerText = 'About';
  let navContentThree = document.createElement('div');
  navContentThree.classList.add('nav-content');
  navContentThree.innerText = 'Contact';

  if(currentTab === 'Home'){
    navContentOne.classList.add('current-page');
  } else if (currentTab === 'About'){
    navContentTwo.classList.add('current-page');
  } else if (currentTab === 'About'){
    navContentThree.classList.add('current-page');
  }

  navBar.append(navContentOne, navContentTwo, navContentThree);

  let profileIcon = document.createElement('img');
  profileIcon.src = accountOutline;
  profileIcon.alt = 'profile icon';

  header.append(logo, verticalBar, navBar, profileIcon);

  return header;
}

const createBackgroundImage = () => {
  let bgImageContainer = document.createElement('div');
  bgImageContainer.classList.add('bg-image');

  let bgImage = document.createElement('img');
  bgImage.src = backgroundChickenImage;
  bgImage.alt = 'background image of chicken wings';

  let welcomeCont = document.createElement('div');
  welcomeCont.classList.add('welcome');

  let welcomeTitle = document.createElement('h1');
  welcomeTitle.innerText = 'Welcome to Chicken Drum!'

  let orderButton = document.createElement('button');
  orderButton.innerText = 'Order Now';

  welcomeCont.append(welcomeTitle, orderButton);

  let imgFilter = document.createElement('div');
  imgFilter.classList.add('img-filter');

  let imgCredit = document.createElement('div');
  imgCredit.classList.add('img-credit');

  let spanCredit = document.createElement('span');
  let spanPhotoBy = document.createElement('span');
  spanPhotoBy.innerText = 'Photo by ';
  let spanOn = document.createElement('span');
  spanOn.innerText = ' on '
  let linkToImageOne = document.createElement('a');
  linkToImageOne.innerText = 'Erik Mclean';
  linkToImageOne.setAttribute('href', 'https://unsplash.com/@introspectivedsgn?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText');
  let linkToImageTwo = document.createElement('a');
  linkToImageTwo.innerText = 'Unsplash';
  linkToImageTwo.setAttribute('href', 'https://unsplash.com/photos/UBtRdqWUbzc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText');

  spanCredit.append(spanPhotoBy, linkToImageOne, spanOn, linkToImageTwo);
  
  imgCredit.appendChild(spanCredit);
  imgFilter.appendChild(imgCredit);

  bgImageContainer.append(bgImage, welcomeCont, imgFilter);

  return bgImageContainer;
}

const createDownloadContent = () => {
  let downloadContainer = document.createElement('div');
  downloadContainer.classList.add('download-container');

  let downloadContent = document.createElement('div');
  downloadContent.classList.add('download-content');

  let downloadHOne = document.createElement('h1');
  downloadHOne.classList.add('d-title');
  downloadHOne.innerText = 'Download the free app';

  let downloadPara = document.createElement('p');
  downloadPara.innerText = `Get the new Romayo’s app on your device and order your favourites faster than ever.`;

  let downloadOptions = document.createElement('div');
  downloadOptions.classList.add('download-options');

  let iosImage = document.createElement('img');
  iosImage.classList.add('ios');
  iosImage.src = iosBadge;
  iosImage.alt = 'ios store image'

  let androidImage = document.createElement('img');
  androidImage.classList.add('google-play');
  androidImage.src = androidBadge;
  androidImage.alt = 'google-play image'

  downloadOptions.append(iosImage, androidImage);
  downloadContent.append(downloadHOne, downloadPara, downloadOptions);

  downloadContainer.appendChild(downloadContent);

  return downloadContainer;
}

export const createFooter = () => {
  let footer = document.createElement('footer');

  let socialsContainer = document.createElement('div');
  socialsContainer.classList.add('socials');

  let facebookDiv = document.createElement('div');
  facebookDiv.classList.add('facebook');
  let fbIcon = document.createElement('img');
  fbIcon.src = facebookIcon;
  fbIcon.alt = 'facebook logo'
  facebookDiv.appendChild(fbIcon);

  let twitterDiv = document.createElement('div');
  twitterDiv.classList.add('twitter');
  let twIcon = document.createElement('img');
  twIcon.src = twitterIcon;
  twIcon.alt = 'twitter logo'
  twitterDiv.appendChild(twIcon);

  let instaDiv = document.createElement('div');
  instaDiv.classList.add('instagram');
  let instaIcon = document.createElement('img');
  instaIcon.src = instagramIcon;
  instaIcon.alt = 'instagram logo'
  instaDiv.appendChild(instaIcon);

  socialsContainer.append(facebookDiv, twitterDiv, instaDiv);

  footer.appendChild(socialsContainer);

  return footer;
}