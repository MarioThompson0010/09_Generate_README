const generated = require('./utils/generateMarkdown.js');
// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What is your title?',
        name: 'TitlePrompt'
    },
    {
        type: 'input',
        message: 'What is your description?',
        name: 'DescriptionPrompt'
    },
    {
        type: 'input',
        message: 'How do you install this product?',
        name: 'InstallationPrompt'
    },
    {
        type: 'input',
        message: 'How are you supposed to use this product?',
        name: 'UsagePrompt'
    },
    {
        type: 'input',
        message: 'What are the contributon guidelines?',
        name: 'ContributingPrompt'
    },
    {
        type: 'input',
        message: 'How do you test this product?',
        name: 'TestPrompt'
    },
    {
        type: 'list',
        message: 'Choose a license',
        name: 'LicensePrompt',
        choices: ['MIT', 'GNU', 'Apache']
    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'UsernamePrompt'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'EmailPrompt'
    }
];

// function to write README file
function writeToFile(fileName, data) {
    const fs = require('fs');
    const output = generated.generateMarkdown(data);
    fs.writeFile(fileName, output, (err) =>
        err ? console.log(err) : console.log('Success!')
    );
}

// function to initialize program
function init() {
    const inquirer = require('inquirer');

    inquirer.prompt(
        questions
    ).then(
        (response) => {
            const filename = `README.md`;
            writeToFile(filename, response);
        }
    );

}

// function call to initialize program
init();
