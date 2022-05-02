// TODO: Create a function that returns a license badge based on which license is passed in
// TODO: Create a function that returns the license link
// TODO: Create a function that returns the license section of README

// TODO: Create a function to generate markdown for README

// generateReadme function populating the README.md
function generateReadme(answers) {
    return `
<h1 align="center">${answers.projectTitle} 👋</h1>
  
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />

## Description
${answers.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
<br />
This application is covered by the ${answers.license} license.
<br />
Link to the <a href='https://www.google.com/search?q=${answers.license}+license'>${answers.license} license</a>

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
If you're stuck or having problems with the application, ${answers.questions} or<br />
✉️ Email me with any questions: ${answers.email}<br /><br />
:octocat: GitHub: [${answers.username}](https://github.com/${answers.username})<br />
<br />
    `;
  }
  
  module.exports = generateReadme;
