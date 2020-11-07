// function to generate markdown for README
const licenseguy = {
  MIT : `MIT License

  Copyright (c) 2020 Mario Thompson
  
  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`,
  GNU:  `GNU GENERAL PUBLIC LICENSE
         Version 3, 29 June 2007
         Copyright (C) 2007 Free Software Foundation, Inc. https://fsf.org/ Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.`,
  Apache: ` Apache License
            Version 2.0, January 2004
            http://www.apache.org/licenses/`
}

function generateMarkdown(data) {

  const {MIT, GNU, Apache} = licenseguy;
  let licensedescript = '';
  switch(data.LicensePrompt)
  {
    case  "MIT": {
      licensedescript = MIT;
      break;
    }
    case "GNU" : {
      licensedescript = GNU;
      break;
    }
    case "Apache" : {
      licensedescript = Apache;
      break;
    }
    default : {
      licensedescript = "unknown license";
    }
  }

  return `
  ![license](https://img.shields.io/badge/License-${data.LicensePrompt}-blue)
  # ${data.TitlePrompt}
  
  ## Description: 
  ${data.DescriptionPrompt}
  
  ## Table of Contents
  
  * [Installation](https://github.com/MarioThompson0010/09_Generate_README#installation)
  * [Usage](https://github.com/MarioThompson0010/09_Generate_README#usage)
  * [License](https://github.com/MarioThompson0010/09_Generate_README#license)
  * [Contributing](https://github.com/MarioThompson0010/09_Generate_README#contributing)
  * [Tests](https://github.com/MarioThompson0010/09_Generate_README#tests)
  * [Questions](https://github.com/MarioThompson0010/09_Generate_README#questions)
  
  ## Installation
  ${data.InstallationPrompt}

  ## Usage
  ${data.UsagePrompt}

  ## License
  ${data.LicensePrompt} : ${licensedescript}

  ## Contributing
  ${data.ContributingPrompt}
  
  ## Tests
  ${data.TestPrompt}
  
  ## Questions
  Username: ${data.UsernamePrompt}

  Email: ${data.EmailPrompt}






`;
}

module.exports = {

 generateMarkdown
};
