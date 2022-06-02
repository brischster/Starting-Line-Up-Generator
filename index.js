const inquirer = require("inquirer");
//const jest = require("jest"); I don't think i need this required into here... will google
const emailValidator = require("email-validator");
const fs = require("fs");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

// based off of stackoverflow and examples, should I be setting this up like:

// const managerQuestions = [{

// }]
const fullTeam = [];

const managerQuestions = [
  {
    type: "input",
    message: "What is the team Manager's name?",
    name: "name",
  },
  {
    type: "number",
    message: "What is the Manager's ID number?",
    name: "iD",
    validate: function (number) {
      if (number > 0) {
        return true;
      }
    },
  },
  {
    type: "input",
    message: "What is the Manager's email address?",
    name: "email",
  },
  {
    type: "input",
    message: "what is the Manager's office number?",
    name: "officeNum",
  },
];

const engineerQuestions = [
  {
    type: "input",
    message: "What is the engineer's name?",
    name: "name",
  },
  {
    type: "number",
    message: "What is the engineer's ID number?",
    name: "iD",
    validate: function (number) {
      if (number > 0) {
        return true;
      }
    },
  },
  {
    type: "input",
    message: "What is the engineer's email address?",
    name: "email",
  },
  {
    type: "input",
    message: "what is the engineer's Github username?",
    name: "github",
  },
];

const internQuestions = [
  {
    type: "input",
    message: "What is the team Intern's name?",
    name: "name",
  },
  {
    type: "number",
    message: "What is the Intern's ID number?",
    name: "iD",
    validate: function (number) {
      if (number > 0) {
        return true;
      }
    },
  },
  {
    type: "input",
    message: "What is the intern's email address?",
    name: "email",
  },
  {
    type: "input",
    message: "what is the name of the Intern's school?",
    name: "school",
  },
];

const addTeamMember = [
  {
    type: "list",
    message: "What would you like to do next?",
    name: "nextEntry",
    choices: ["Add an Engineer", "Add an Intern", "Finished building team"],
  },
];

function promptManager() {
  inquirer.prompt(managerQuestions).then((data) => {
    const teamMember = new Manager(
      data.name,
      data.email,
      data.iD,
      data.officeNum
    );
    fullTeam.push(teamMember);
    promptAdditionalTeamMember();
  });
}

function promptEngineer() {
  inquirer.prompt(engineerQuestions).then((data) => {
    const teamMember = new Engineer(
      data.name,
      data.email,
      data.iD,
      data.github
    );
    fullTeam.push(teamMember);
    promptAdditionalTeamMember();
  });
}

function promptIntern() {
  inquirer.prompt(internQuestions).then((data) => {
    const teamMember = new Intern(data.name, data.email, data.iD, data.school);
    fullTeam.push(teamMember);
    promptAdditionalTeamMember();
  });
}

function promptAdditionalTeamMember() {
  inquirer.prompt(addTeamMember).then((answers) => {
    if (answers.nextEntry === "Add an Engineer") {
      promptEngineer(); // obviously not correct, just placeholder for now
    } else if (answers.nextEntry === "Add an Intern") {
      promptIntern(); // not correct, placeholder
    } else {
      //render HTML page placeholder again
      console.log(fullTeam);
    }
  });
}

promptManager();
