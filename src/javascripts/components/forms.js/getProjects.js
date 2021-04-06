const getProjects = (array) => {
  document.querySelector('#project-page').innerHTML = '';

  array.forEach((arr) => {
    document.querySelector('#project-page').innerHTML += `<div class="card my-2" style="width: 18rem;" id="bioCard">
    <div class="card-body">
    <h5
      <p class="card-text">Project Title: ${arr.title}</p>
     <p class="card-text">${arr.screenshot}</p>
     <p class="card-text">${arr.description}</p>
      <p class="card-text">Technologies Used: ${arr.technologiesUsed}</p>
      <p class="card-text">${arr.available}</p>
      <p class="card-text">Url: ${arr.url}</p>
      <p class="card-text">Github Url: ${arr.githubUrl}</p>
 </div>
</div>`;
  });
};

export default getProjects;
