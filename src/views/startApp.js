import getBio from '../javascripts/components/forms.js/getBio';
import getProjects from '../javascripts/components/forms.js/getProjects';
import getTech from '../javascripts/components/forms.js/getTech';
import navBar from '../javascripts/helpers/navBar';
import projects from '../javascripts/helpers/projectsData';
import domBuilder from './domBuilder';

const startApp = () => {
  domBuilder();
  navBar();
  getProjects(projects);
  getBio();
  getTech();
};

export default startApp;
