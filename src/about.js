import { createHeader, createFooter } from "./home";

const loadAboutPage = (currentTab) => {
  let contentContainer = document.querySelector('#content');

  let headerSection = createHeader(currentTab);
  let footerSection = createFooter();

  contentContainer.append(headerSection);
}

export default loadAboutPage;