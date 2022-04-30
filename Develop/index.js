// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const promptDescription = () => {
  return inquirer.prompt ([
    {
      type: 'input',
      name: 'motivation',
      message: 'What was your motivation? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please answer the prompt!');
          return false;
        }
      }
    },
    {
        type: 'input',
        name: 'build',
        message: ' Why did you build this project? (Required)',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please answer the prompt!');
            return false;
            }
        }
    },
    {
        type: 'input',
        name: 'problems',
        message: 'What problem does it solve? (Required)',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please answer the prompt!');
            return false;
            }
        }
    },
    {
      type: 'input',
      name: 'learn',
      message: 'What did you learn? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please answer the prompt!');
          return false;
        };
      }
    }
  ]);
};

const promptInstallation = () => {
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirmInstallation',
            message: 'Is there any steps required to install your project?',
            default: true
        },
        {
            type: 'input',
            name: 'installation',
            message: "Provide a step-by-step description of how to get the development environment running",
            when: ({ confirmInstallation }) => {
                if (confirmInstallation) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    ])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

promptDescription()
.then (descriptioninfo => {
    console.log(descriptioninfo)
})
.then(promptInstallation)
.then(readmeData => {
    console.log(readmeData)
})