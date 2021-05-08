var licenses = {
    "Apache License 2.0": "https://opensource.org/licenses/Apache-2.0",
    "GNU General Public License v3.0": "https://www.gnu.org/licenses/gpl-3.0.en.html",
    "MIT": "https://opensource.org/licenses/MIT",
    "Creative Commons Zero v1.0 Universal": "https://creativecommons.org/publicdomain/zero/1.0/",
    "None": "",
  }
  
  let licenseList = () => Object.keys(licenses);
  
  function renderLicenseBadge(license) {
    return encodeURI(`https://img.shields.io/badge/License-${license}-yellow.svg`);
  }
  
  function renderLicenseLink(license) {
    return encodeURI(licenses[license]);
  }
  
  function renderLicenseSection(license) {
    return `[![License: ${license}](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`;
  }
  
  function generateReport(team) {
    return `
    # ${team.name}
  
    ${renderLicenseSection(team.license)}
  
    ## Description
    ${team.description}
  
    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Credits](#credits)
    - [Tests](#tests)
    - [Questions](#questions)
  
    ## Installation 
    ${team.installation}
  
    ## Usage
    ${team.usage}
  
    ## License
    This team is licensed by the [${team.license}](${renderLicenseLink(team.license)}) license
  
    ## Contributing 
    ${team.contributing}
  
    ## Credits
    ${team.credits}
  
    ## Tests 
    ${team.tests}
  
    ## Questions
    If you have any questions or require further clarification then please contact me at:
    - https://github.com/${team.username}/
    - ${team.email}
  `;
  }
  
  module.exports = {
    generateReport: generateReport, 
    licenseList: licenseList
  };
  