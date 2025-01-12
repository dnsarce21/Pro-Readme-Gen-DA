/////////setup required variables/////////////

const inquirer = require("inquirer");

const fs = require("fs");

//check links//

const apache =
  "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
const mit =
  "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
const gnu =
  "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
const bsd =
  "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";

///////////Set questions for README with inquirer and .then to get answers///////////////

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the name of your Project?",
      name: "title",
    },

    {
      type: "input",
      message:
        "Please provide a brief description of project answering WHAT, WHY and HOW?",
      name: "description",
    },

    {
      type: "input",
      message: "What are the steps required to install your project?",
      name: "installation",
    },

    {
      type: "input",
      message: "How is your application used?",
      name: "usage",
    },

    {
      type: "input",
      message: "Add collaborators (optional):",
      name: "collaborators",
    },

    {
      type: "checkbox",
      message: "Please choose a license for your project!",
      name: "license",
      choices: ["Apache 2.0", " BSD 3", " GNU v3 ", " MIT"],
    },

    {
      type: "input",
      message: "Please add your application features (optional):",
      name: "features",
    },

    {
      type: "input",
      message: "How to contribute to project?",
      name: "contribute",
    },

    {
      type: "input",
      message: "Enter your GitHub Username:",
      name: "github",
    },

    {
      type: "input",
      message: "Enter your email address:",
      name: "email",
    },
  ])
  .then(
    async (answers) =>
      await fs.writeFileSync("README.md", generateReadme(answers))
  )
  .then(() => console.log("README Successfully Created!"));

////////////////function to write README.md file/////////////////////////////

const generateReadme = function (writeFile) {
  const readMe =
    `# **✨${writeFile.title}**✨</br>

  [![License](https://img.shields.io/badge/License-Apache%202.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0) 
  [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)


  ## **⚡Project Description**
  
  ` +
    "```md" +
    `
  ${writeFile.description}
  ` +
    "```" +
    `

  ---  
 
  ## **🔎Table of Contents**

  
  -[Installation](#installation)

  -[Usage](#usage) 

  -[Credits](#credits) 

  -[License](#license) 

  -[Features](#features) 

  -[Contribute](#contribute)

  -[Questions](#questions)

  ---
  
  ## **🛠️Installation**
  
  ` +
    "```md" +
    `
  ${writeFile.installation}
  ` +
    "```" +
    `
  
 ---
  
  ## **💻Usage**
  
  ` +
    "```md" +
    `
  ${writeFile.usage}
  ` +
    "```" +
    `
  
  ---
  
  ## **🏆Credits**
  
  ![collaborators](https://img.shields.io/npm/collaborators/inquirer)

  ` +
    "```md" +
    `
  ${writeFile.collaborators}
  ` +
    "```" +
    `
  
  
  ## **©️License**

  ` +
    "```md" +
    `  
  ${writeFile.license}
  ` +
    "```" +
    `
  
  ---
  
  ## **🌟Badges🌟**
  
 
  ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
  
  ![GitHub Stars](https://img.shields.io/github/stars/dnsarce21/Pro-Readme-Gen-DA?style=social)
  
  ![followers](https://img.shields.io/github/followers/dnsarce21?style=social)
 
  ---

  ## **📑Features**
  
  ` +
    "```md" +
    `
  ${writeFile.features}
  ` +
    "```" +
    `

  ---

  ## **🎭Contribute**
  
 
  [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)
  ![Contributors](https://img.shields.io/github/contributors/dnsarce21/Pro-Readme-Gen-DA)

  ` +
    "```md" +
    `
  ${writeFile.contribute}
  ` +
    "```" +
    `
  
  ---
  
  ## **🚧Tests**
  
  ` +
    "```md" +
    `
  Write tests for your application and provide examples on how to run them here.
  ` +
    "```" +
    `
  ---
  
  ## **💬Questions**

  ` +
    "```md" +
    `
  🥇For any questions please contact me on:
  ` +
    "```" +
    `
  
  GitHub: **[${writeFile.github}]` +
    "(https://github.com/" +
    writeFile.github +
    ")" +
    `**
  
  Email me: **${writeFile.email}**
 
  `;

  return readMe;
};

/////Need to work on BADGES and formatting README better///////////////
