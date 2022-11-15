const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js')
const writeFileAsync = util.promisify(fs.writeFile);

//Questions for user to populate README.md
const questions = () =>
    inquirer.prompt([
        {   
            type: "input",
            name: "Title",
            message: "What is your project title?"
        },
        {
            type: "input",
            name: "Description",
            message: "Write a brief description of your project"
        },
        {
            type: "input",
            name: "Installation",
            message: "Describe the installation process",
        },
        {
            type: "input",
            name: "Usage",
            message: "What is this project used for?"
        },
        {
            type: "list",
            name: "License",
            message: "Chose the appropriate license for this project ",
            choices: [
                "MIT",
                "Eclipse",
                "Apache",
                "GNU",
                "BSD 3"
              ]
        },
        {
            type: "input",
            name: "GitHub",
            message: "What is your your GitHub username? "
        },
        {
            type: "input",
            name: "Email",
            message: "What is your Email address? "
        }   
    ]);

     

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
        throw err;
        console.log('Information transferred to README')
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput){
        console.log(userInput)
        writeToFile("ReadME.md", generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();
