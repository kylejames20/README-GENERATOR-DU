const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = ({ contributor, description, email, github, installation, license, linkedin, location, name, testing, title, usage}) =>
`


[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)




`
inquirer  
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'location',
            message: 'Where are you from?',
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is the usage of this project?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license do you need for this project?',
            choices: ['Apache-2.0', 'ISC', 'MIT', 'Unlicense'],
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe your project in a few words.',
        },
        {
            type: 'input',
            name: 'contributor',
            message: 'Who else, if anyone, is a contributor on this project?',
        },
        {
            type: 'input',
            name: 'testing',
            message: 'What testing is required for this project?',
        },
        {
            type: 'input',
            name: 'linkedin',
            message: 'What is your LinkedIn?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your GitHub username.',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address.',
        },
    ])



.then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('readme.md', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created readme.md!')
    );
  });