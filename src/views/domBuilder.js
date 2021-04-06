const domBuilder = () => {
  document.querySelector('#app').innerHTML = `
  <div id="navigation"></div>
  <div id="main-container"></div>
  <div id="bio-page"></div>
  <div id="tech-page"></div>
  <div id="project-page"></div>
  `;
};

export default domBuilder;
