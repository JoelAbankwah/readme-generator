// Declaring the dependencies and variables
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
const inquirer = require("inquirer");
const generateReadme = require("./utils/generateReadme")

//Prompt the user questions to populate the README.md

// TODO: Create an array of questions for user input

function promptUser(){
    return inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "What is the title of your project?",
        },
        {
            type: "input",
            name: "description",
            message: "Provide a description of your project: "
        },
        {
            type: "input",
            name: "installation",
            message: "Provide, as detailed as possible, the steps needed to take for the installation process: ",
        },
        {
            type: "input",
            name: "usage",
            message: "Provide steps on how to run the application?"
        },
        {
            type: "list",
            name: "license",
            message: "Please choose which public license you'd like for this project: ",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
        },
        {
            type: "input",
            name: "contributing",
            message: "Provide the first and last names of the contributors of this projects:"
        },
        {
            type: "input",
            name: "tests",
            message: "Give users explicit instructions on how to run all necessary tests. Explain the libraries used for testing your software and supply all necessary commands."
        },
        {
            type: "input",
            name: "questions",
            message: "Provide an explanation of what to do if a user runs into an issue? "
        },
        {
            type: "input",
            name: "username",
            message: "Enter your GitHub username: "
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email: "
        }
    ]);
} 

// TODO: Create a function to initialize app
async function init() {
  try {
      // Ask user questions and generate responses
      const answers = await promptUser();
      const generateContent = generateReadme(answers);
      // Write new README.md to dist directory
      await writeFileAsync('./README.md', generateContent);
      console.log('File written successfully');
  }   catch(err) {
      console.log(err);
  }
}


// Function call to initialize app
init();

