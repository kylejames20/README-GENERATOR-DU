const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = ({ contributor, description, email, github, installation, license, linkedin, location, name, testing, title, usage }) =>


`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${name}</h1>
    <p class="lead">I am from ${location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${github}</li>
      <li class="list-group-item">LinkedIn: ${linkedin}</li>
      <li class="list-group-item">Contributor: ${contributor}</li>
      <li class="list-group-item">Description: ${description}</li>
      <li class="list-group-item">Email: ${email}</li>
      <li class="list-group-item">Installation: ${installation}</li>
      <li class="list-group-item">License: ${license}</li>
      <li class="list-group-item">Testing: ${testing}</li>
      <li class="list-group-item">Title: ${title}</li>
      <li class="list-group-item">Usage: ${usage}</li>
    </ul>
  </div>
</div>
</body>
</html>












## Table of Contents

- [Contributor](#contributor)
- [Description](#description)
- [Email](#email)
- [GitHub](#github)
- [Installation](#installation)
- [License](#license)
- [LinkedIn](#linkedin)
- [Location](#location)
- [Name](#name)
- [Testing](#testing)
- [Title](#title)
- [Usage](#usage)






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