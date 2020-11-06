// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
    const fs = require('fs');
    const generated = require("./utils/generateMarkdown");
    const output = generated.generateMarkdown(data);
    fs.writeFile(fileName, output, (err) =>
    err ? console.log(err) : console.log('Success!')
   );
}

// function to initialize program
function init() {
    const inquirer = require('inquirer');
    

    inquirer.prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'NamePrompt'
        },
    
        {
            type: 'input',
            message: 'What is your location?',
            name: 'LocationPrompt'
        },
    
        {
            type: 'input',
            message: 'What is your autobiography?',
            name: 'BioPrompt'
        },
    
        {
            type: 'input',
            message: 'What is your LinkedIn URL?',
            name: 'LinkedInPrompt'
        },
    
        {
            type: 'input',
            message: 'What is your GitHub URL?',
            name: 'GitHubPrompt'
        }
    ]).then(
        (response) => {
            const filename = `README.md`;
        }
    );

}

// function call to initialize program
init();
