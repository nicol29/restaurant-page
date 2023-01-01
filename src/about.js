import { createFooter } from "./home";

const loadAboutPage = () => {
  let contentContainer = document.querySelector('#content');

  
  let footerSection = createFooter();

  contentContainer.append(footerSection);
}

export default loadAboutPage;