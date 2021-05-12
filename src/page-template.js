const prettier = require("prettier");

function generateHTML(data) {
  console.log(data);
  return `
  <!DOCTYPE html>
  <html>
  <head>
  <title>Team Profile Generator</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
  <link rel="stylesheet" href="./style.css">
  <title>Team Profile</title>
  </head>
  <body>
  <div class="jumbotron bg-primary" >
    <h1 class="text-center text-white">My Team</h1>
    </div>
    <div class='container'>
    <ul class="ul">
    ${makeCards(data)}
    </ul>
    </div>
  </body>
  </html>
  `;
}

function makeCards(data) {
  console.log("DATA", data);
  return data
    .map((team) => {
      let role = team.getRole();
      switch (role) {
        case "Manager":
          return createManagerCard(team);
          break;
        case "Engineer":
          return createEngineerCard(team);
          break;
        case "Intern":
          return makeInternCard(team);
          break;
      }
    })
    .join("\n");
}

function createManagerCard(manager) {
  console.log(manager);
  console.log("Manager info:", manager.name);
  let managerCard = `
    <li>
    <div class="col-md-3">
    <div class="card cardbody">
      <div class="card-header text-white" style="background: #007bff">
                    <div><h2>${manager.getRole()}</h2></div>
                  </div>
      <div class="card-body">
        <form role="form">	
        <div class="form-group">
        <label class="title" for="reserve-unique-id" id="reserve-unique-id">NAME: ${
          manager.name
        }</label>
        </div>		
          <div class="form-group">
              <label for="reserve-unique-id" id="reserve-unique-id">ID: ${
                manager.id
              }</label>
          </div>
          <div class="form-group">
            <label for="reserve-email" id="reserve-email">Email: <a href = "mailto: ${
              manager.email
            }">${manager.email}</a></label>
          </div>
          <div class="form-group">
              <label for="reserve-phone" id="reserve-office">Office Number: ${
                manager.officeNumber
              }</label>					
          </div>				
          </form>
      </div>
    </div>
  </div>
  </li>
  `;
  return managerCard;
}

function createEngineerCard(engineer) {
  console.log(engineer);
  console.log("Engineer info:", engineer.name);
  let engineerCard = `
  <li>
  <div class="col-md-3">
  <div class="card cardbody">
    <div class="card-header text-white" style="background: #06dd3c">
                  <div><h2>${engineer.getRole()}</h2></div>
                </div>
    <div class="card-body">
      <form role="form">	
      <div class="form-group">
      <label class="title" for="reserve-unique-id" id="reserve-unique-id">NAME: ${
        engineer.name
      }</label>
      </div>		
        <div class="form-group">
            <label for="reserve-unique-id" id="reserve-unique-id">ID: ${
              engineer.id
            }</label>
        </div>
        <div class="form-group">
          <label for="reserve-email" id="reserve-email">Email: <a href = "mailto: ${
            engineer.email
          }">${engineer.email}</a></label>
        </div>
        <div class="form-group">
                <label for="reserve-phone" id="reserve-office-number">Github: <a href = "https://github.com/${
                  engineer.github
                }">${engineer.github}</label>					
            </div>				
        </form>
    </div>
  </div>
</div>
</li>
    `;
  return engineerCard;
}

function makeInternCard(intern) {
  console.log(intern);
  console.log("Intern info:", intern.name);
  let internCard = `
  <li>
  <div class="col-md-3">
  <div class="card cardbody">
    <div class="card-header text-white" style="background: #dd1ee4">
                  <div><h2>${intern.getRole()}</h2></div>
                </div>
    <div class="card-body">
      <form role="form">	
      <div class="form-group">
      <label class="title" for="reserve-unique-id" id="reserve-unique-id">NAME: ${
        intern.name
      }</label>
      </div>		
        <div class="form-group">
            <label for="reserve-unique-id" id="reserve-unique-id">ID: ${
              intern.id
            }</label>
        </div>
        <div class="form-group">
        <label for="reserve-email" id="reserve-email">Email: <a href = "mailto: ${
          intern.email
        }">${intern.email}</a></label>
      </div>
        <div class="form-group">
                <label for="reserve-phone" id="reserve-office-number">School: ${
                  intern.school
                }</label>	
                </label>					
            </div>				
        </form>
    </div>
  </div>
</div>
</li>
    `;
  return internCard;
}

module.exports = generateHTML;
