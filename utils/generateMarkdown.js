// function to generate markdown for README
const licenseguy = {
  MIT: `MIT License

  Copyright (c) 2020 Mario Thompson
  
  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`,

  GNU: `
                            GNU GENERAL PUBLIC LICENSE
         Version 3, 29 June 2007
         Copyright (C) 2007 Free Software Foundation, Inc. https://fsf.org/ 
         Everyone is permitted to copy and distribute verbatim copies of this license document, 
         but changing it is not allowed. 
         
         2. Basic Permissions.

         All rights granted under this License are granted for the term of
       copyright on the Program, and are irrevocable provided the stated
       conditions are met.  This License explicitly affirms your unlimited
       permission to run the unmodified Program.  The output from running a
       covered work is covered by this License only if the output, given its
       content, constitutes a covered work.  This License acknowledges your
       rights of fair use or other equivalent, as provided by copyright law.
       
         You may make, run and propagate covered works that you do not
       convey, without conditions so long as your license otherwise remains
       in force.  You may convey covered works to others for the sole purpose
       of having them make modifications exclusively for you, or provide you
       with facilities for running those works, provided that you comply with
       the terms of this License in conveying all material for which you do
       not control copyright.  Those thus making or running the covered works
       for you must do so exclusively on your behalf, under your direction
       and control, on terms that prohibit them from making any copies of
       your copyrighted material outside their relationship with you.
       
         Conveying under any other circumstances is permitted solely under
       the conditions stated below.  Sublicensing is not allowed; section 10
       makes it unnecessary.` ,

  Apache: `                      Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

   

   APPENDIX: How to apply the Apache License to your work.

      To apply the Apache License to your work, attach the following
      boilerplate notice, with the fields enclosed by brackets "[]"
      replaced with your own identifying information. (Don't include
      the brackets!)  The text should be enclosed in the appropriate
      comment syntax for the file format. We also recommend that a
      file or class name and description of purpose be included on the
      same "printed page" as the copyright notice for easier
      identification within third-party archives.

   Copyright [yyyy] [name of copyright owner]

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
   
   `
}

function generateMarkdown(data) {

  const { MIT, GNU, Apache } = licenseguy;
  let licensedescript = '';
  switch (data.LicensePrompt) {
    case "MIT": {
      licensedescript = MIT;
      break;
    }
    case "GNU": {
      licensedescript = GNU;
      break;
    }
    case "Apache": {
      licensedescript = Apache;
      break;
    }
    default: {
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
