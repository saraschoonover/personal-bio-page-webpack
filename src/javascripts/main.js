// USE WITH FIREBASE AUTH
// import checkLoginStatus from './helpers/auth';
import 'bootstrap'; // import bootstrap elements and js

import '../styles/main.scss';

const projects = [
  {
    title: 'Cool Project',
    screenshot: 'http://gotoflashgames.com/files/file/033.jpg',
    description: 'This is the best project',
    // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: true,
    url: 'https://github.com/nss-evening-cohort-8/js-part-deux',
    // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: 'https://github.com/nss-evening-cohort-8/js-part-deux',
  }
];

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
};

const createProjectCards = (arr) => {
  let domString = '';

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < arr.length; i++) {
    domString += `<div class="card my-2" style="width: 18rem;" id=${i}>
    <div class="card-body">
      <p class="card-text">${arr[i].title}</p>
     <p class="card-text">${arr[i].screenshot}</p>
     <p class="card-text">${arr[i].description}</p>
      <p class="card-text">${arr[i].technologiesUsed}</p>
      <p class="card-text">${arr[i].available}</p>
      <p class="card-text">${arr[i].url}</p>
      <p class="card-text">${arr[i].githubUrl}</p>
      <button type="button" class="btn btn-danger" id="${arr[i]}">Delete</button>
 </div>
</div>`;
  }
  printToDom('#projectsPage', domString);
};

// const buttonEvents = () => {
//   document.querySelector('#')
// }

const init = () => {
  createProjectCards(projects);
};

init();

// const init = () => {
//   document.querySelector('#app').innerHTML = '<h1>HELLO! You are up and running!</h1>';
//   console.warn('YOU ARE UP AND RUNNING!');

//   // USE WITH FIREBASE AUTH
//   // checkLoginStatus();
// };

// init();
