// Function to return a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  }
  return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
}

// Function to return the license link
function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  }
  return `\n* [License](#license)\n`;
}

// Function to return the license section of README
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  }
  return `## License

This project is licensed under the ${license} license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
