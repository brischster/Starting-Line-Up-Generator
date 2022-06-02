const inquirer = require("inquirer");
//const jest = require("jest"); I don't think i need this required into here... will google
const emailValidator = require("email-validator");
const fs = require("fs");

// based off of stackoverflow and examples, should I be setting this up like:

// const managerQuestions = [{

// }]

const managerQuestions = [
  {
    type: "input",
    message: "What is the team Manager's name?",
    name: "managerName",
  },
  {
    type: "number",
    message: "What is the Manager's ID number?",
    name: "managerID",
    validate: function (input) {
      if (number > 0) {
        return true;
      }
    },
  },
  {
    type: "input",
    message: "What is the Manager's email address?",
    name: "managerEmail",
    validate: emailValidator,
  },
  {
    type: "input",
    message: "what is the Manager's office number?",
    name: "managerOfficeNum",
  },
  {
    type: "list",
    message: "What would you like to do next?",
    name: "nextEntry",
    choices: ["Add an Engineer", "Add an Intern", "Finished building team"],
  },
].then((answers) => {
  if (answers.nextEntry === "Add an Engineer") {
    return engineerQuestions; // obviously not correct, just placeholder for now
  } else if (answers.nextEntry === "Add an Intern") {
    return internQuestions; // not correct, placeholder
  } else {
    //render HTML page placeholder again
  }
});

const EngineerQuestions = [
  {
    type: "input",
    message: "What is the engineer's name?",
    name: "engineerName",
  },
  {
    type: "number",
    message: "What is the engineer's ID number?",
    name: "engineerID",
    validate: function (input) {
      if (number > 0) {
        return true;
      }
    },
  },
  {
    type: "input",
    message: "What is the engineer's email address?",
    name: "engineerEmail",
    validate: emailValidator,
  },
  {
    type: "input",
    message: "what is the engineer's Github username?",
    name: "managerOfficeNum",
  },
];

const internQuestions = [
  {
    type: "input",
    message: "What is the team Intern's name?",
    name: "internName",
  },
  {
    type: "number",
    message: "What is the Intern's ID number?",
    name: "internID",
    validate: function (input) {
      if (number > 0) {
        return true;
      }
    },
  },
  {
    type: "input",
    message: "What is the intern's email address?",
    name: "internEmail",
    validate: emailValidator,
  },
  {
    type: "input",
    message: "what is the name of the Intern's school?",
    name: "internSchool",
  },
];

function addEngineer() {
  inquirer.prompt(engineerQuestions).then((response) => {});
}
