const navBar = () => {
  document.querySelector('#navigation').innerHTML = `
    <nav class="navbar fixed-top navbar-expand-lg navbar-light mb-4" id="navBarColor">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item"> <a class="nav-link text-white" href="#bio-page" id="bio">Bio</a></li>
            <li class="nav-item"><a class="nav-link text-white" href="#tech-page" id="technologies">Technologies</a></li>
            <li class="nav-item"><a class="nav-link text-white" href="#project-page" id="projects">Projects</a></li>
          </ul>
          <div id="logout-button"></div>
        </div>
      </nav>
     `;
};

export default navBar;
