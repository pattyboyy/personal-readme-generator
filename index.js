// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Provide installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide usage information:',
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Provide contribution guidelines:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide test instructions:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'BSD-3-Clause', 'None'],
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
];

// Function to write README file
async function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, async (err) => {
    const chalk = await import('chalk');
    if (err) {
      console.error(chalk.default.red('Error generating README file:'), err);
    } else {
      console.log(chalk.default.green('README file generated successfully!'));
    }
  });
}

// Function to initialize app
async function init() {
  const chalk = await import('chalk');
  console.log(chalk.default.cyan('Welcome to the README Generator!'));
  inquirer.prompt(questions).then(async (answers) => {
    const readmeContent = generateMarkdown(answers);
    await writeToFile('README.md', readmeContent);
  });
}

// Function call to initialize app
init();