// index.js

// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: async (answers) => {
      const chalk = await import('chalk');
      return `What is the ${chalk.default.cyan('title')} of your project?`;
    },
  },
  {
    type: 'input',
    name: 'description',
    message: async (answers) => {
      const chalk = await import('chalk');
      return `Provide a ${chalk.default.green('description')} of your project:`;
    },
  },
  {
    type: 'input',
    name: 'installation',
    message: async (answers) => {
      const chalk = await import('chalk');
      return `Provide ${chalk.default.magenta('installation')} instructions:`;
    },
  },
  {
    type: 'input',
    name: 'usage',
    message: async (answers) => {
      const chalk = await import('chalk');
      return `Provide ${chalk.default.yellow('usage')} information:`;
    },
  },
  {
    type: 'input',
    name: 'contribution',
    message: async (answers) => {
      const chalk = await import('chalk');
      return `Provide ${chalk.default.blue('contribution')} guidelines:`;
    },
  },
  {
    type: 'input',
    name: 'tests',
    message: async (answers) => {
      const chalk = await import('chalk');
      return `Provide ${chalk.default.red('test')} instructions:`;
    },
  },
  {
    type: 'list',
    name: 'license',
    message: async (answers) => {
      const chalk = await import('chalk');
      return `Choose a ${chalk.default.green('license')} for your project:`;
    },
    choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'BSD-3-Clause', 'None'],
  },
  {
    type: 'input',
    name: 'github',
    message: async (answers) => {
      const chalk = await import('chalk');
      return `Enter your ${chalk.default.cyan('GitHub username')}:`;
    },
  },
  {
    type: 'input',
    name: 'email',
    message: async (answers) => {
      const chalk = await import('chalk');
      return `Enter your ${chalk.default.magenta('email address')}:`;
    },
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
    console.log(chalk.default.magenta('Generating README...'));
    const readmeContent = generateMarkdown(answers);
    await writeToFile('README.md', readmeContent);
    console.log(chalk.default.yellow('README generation complete!'));
  });
}

// Function call to initialize app
init();