# SDET Automation Challenge

## Test Framework Instructions
**Pre-Requisites**

1.	You need to have Java version 20.0.1 and Node v20.2.0 installed on your machine.
2.	Run “npm install” (without the quotes) before running the test scripts in order to install missing dependencies.
3.	Note: I’m committing Allure test reports/results to demonstrate that I've implemented HTML reporting in my project. In addition, due to conflicts with Fountain on the AUT3 QA server, I’m using the Pod2 Platoon 4 QA env to execute my automation tests.

**Run the Following Commands to Execute Test Scripts**

1. npm run smokeTest: Executes happypath.js test case
2. npm run regressionTest: Executes negativepath.js test case
3. npm run pretest: Deletes previously generated Allure test reports and results 
4. npm run test: Runs all test scripts and generates test results folder.       
5. npm run posttest: Generates Allure test reports and results
6. npm run wdio: Runs all tests based on ./wdio.conf.js. Generates an allure-results folder containing several XML files


**Screenshot of Passing Tests**
<img width="1507" alt="github1" src="https://github.com/jspace9922/sdet-coding-challenge-main/assets/134408657/1bdc9c1b-dfe5-4e92-bf3e-0176b8f5c419">





**Screenshot of Broken Test**

<img width="1512" alt="github2" src="https://github.com/jspace9922/sdet-coding-challenge-main/assets/134408657/9bb91f1a-dd5c-4282-9173-a3bc88478cd3">





