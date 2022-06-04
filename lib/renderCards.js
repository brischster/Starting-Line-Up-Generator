const renderManagerCard = (manager) => {
  return `<div class="card border-dark mb-3" style="width: 18rem">
  <div class="card-body">
    <h4 class="card-title" id="name">${manager.name}</h4>
    <h5 class="card-subtitle mb-2 text-muted" id="role">${manager.getRole()}</h5>
    <ul class="list-group list-group-flush">
      <li class="list-group-item" id="id">ID: ${manager.id}</li>
      <li class="list-group-item" id="officeNumber">Office Number: ${
        manager.officeNum
      }</li>
      <li class="list-group-item" id="email">
        <a href="mailto:${manager.email}" class="card-link-email">Email ${
    manager.name
  }</a>
      </li>
    </ul>
  </div>
</div>`;
};

const renderEngineerCard = (engineers) => {
  const engineerCards = [];
  for (let i = 0; i < engineers.length; i++) {
    engineerCards.push(`<div class="card border-dark mb-3" style="width: 18rem">
  <div class="card-body">
    <h4 class="card-title">${engineers[i].name}</h4>
    <h5 class="card-subtitle mb-2 text-muted">${engineers[i].getRole()}</h5>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${engineers[i].id}</li>
      <li class="list-group-item">
        <a href="mailto:${engineers[i].email}" class="card-link-email">Email ${
      engineers[i].name
    }</a>
      </li>
      <li class="list-group-item">
        <a href="https://github.com/${engineers[i].github}">${
      engineers[i].name
    } Github Profile</a>
      </li>
    </ul>
  </div>
</div>`);
  }
  return engineerCards.join(" ");
};

const renderInternCard = (interns) => {
  const internCards = [];
  interns.forEach((intern) => {
    internCards.push(`<div class="card border-dark mb-3" style="width: 18rem">
  <div class="card-body">
    <h4 class="card-title">${intern.name}</h4>
    <h5 class="card-subtitle mb-2 text-muted">${intern.getRole()}</h5>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${intern.id}</li>
      <li class="list-group-item">School: ${intern.school}</li>
      <li class="list-group-item">
        <a href="mailto:${intern.email}" class="card-link-email">Email ${
      intern.name
    }</a>
      </li>
    </ul>
  </div>
</div>`);
  });
  return internCards.join(" ");
};

const renderCards = (team) => {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Starting Line Up Generator</title>
    <!-- CSS only -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
      crossorigin="anonymous"
    />
    <script
      src="https://kit.fontawesome.com/e757b9f845.js"
      crossorigin="anonymous"
    ></script>
  </head>
  <body>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 p-3 mb-2 bg-success text-white">
          <h1 class="text-center">My Starting Line Up</h1>
        </div>
      </div>
    </div>
    <div class="constainer">
      <!-- where I want the cards to go -->
      ${renderManagerCard(team[0])}
      ${renderEngineerCard(
        team.filter((engineer) => engineer.getRole() === "Engineer")
      )}
      ${renderInternCard(
        team.filter((intern) => intern.getRole() === "Intern")
      )}
    </div>
  </body>
</html>`;
};

module.exports = renderCards;
