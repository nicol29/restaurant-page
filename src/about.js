import { createFooter } from "./home";

const loadAboutPage = () => {
  let contentContainer = document.querySelector('#content');


  let footerSection = createFooter();

  contentContainer.append(footerSection);
}

const createBody = () => {
  let bodyContainer = {}
}

export default loadAboutPage;