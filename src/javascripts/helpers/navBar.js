const navBar = () => {
  document.querySelector('#navigation').innerHTML = `
    <nav class="navbar fixed-top navbar-expand-lg navbar-light mb-4" id="navBarColor">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item"> <a class="nav-link" href="#" id="bio">Bio</a></li>
            <li class="nav-item"><a class="nav-link" href="#" id="technologies">Technologies</a></li>
            <li class="nav-item"><a class="nav-link" href="#" id="projects">Projects</a></li>
          </ul>
          <div id="logout-button"></div>
        </div>
      </nav>
     `;
};

export default navBar;
