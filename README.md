# WDIO Reference Project

> THIS IS A WORK IN PROGRESS!

This is a reference implementation project for Webdriver.io, it will cover most of the basic setup and have some features which are essential for most.

Features include:
* Cucumber Framework
* Test data management
  * Environment specific test data
  * Static test data
* Visual validation
  * Comparison
  * Generating Baselines
* Cross-Browser testing 
  * Local running
  * Third Party Service
* Reporting
  * HTML report with embedded test information


## Getting Started
This project has been built with the intention of making it as simple as possible for people to pick it up and run with it.

All example code should be well commented and have docStrings for ease of use.

### Cloning
Clone this repo to your machine and copy the entire ```wdio-reference``` contents to your desired folder location for your test suite.

Run ```npm install```

### Running Reference Tests
Running the suite is managed via npm scripts within the ```package.json```

example: ```npm run wdio```


### How To Make It You Own

Simple start implementing your own .feature file and building the adjoining step_definitions. Modify the supporting files such as ```test_data/environments/local.json``` and once you have a few on the go you can remove the reference code within the repo.

Files you can remove when ready:
```example.feature```
```example.page.ts```
```generic.steps.ts```

Files you should be modifying as you build:
```test_data/all```
```types/all```
```visual_validation/all```

<br>

## Implementation Details

### Folder Structure
- ```wdio ```- top level project folder
  - ```config``` - folder to hold all config e.g capabilities and difference wdio.conf
  - ```test_data``` - holds environmental and static test data
  - ```tests``` - holds the test implementation
    - ```features``` - gherkin .feature files
    - ```pages``` - page object model pages/sub-pages
    - ```step_definitions``` - cucumber step definitions that implement scenario steps
    - ```types``` - custom type definitions
    - ```utils``` - utility and helper functions/classes to support test implementation 

### WDIO

### TypeScript
Project uses the typescript Webdriver.io bindings/config

### Cucumber
Test definitions are written in Gherkin within feature files and implemented in step definitions using the Cucumber Framework

### Prettier
Code styling is handled by the default Prettier config

### Eslint
Eslint uses the Typescript/eslint and Prettier extensions 

### LambdaTest
    In Progress

<br>

## Config Options


### WDIO Config
Main config for WDIO is contained within ```wdio.conf.ts```.

This project also uses custom test data stored in json files. This can be either static or env specific in nature and we have a few utils functions to handle this.

You should not need to make any changes to this file unless it's expected to be changed for everything. Use the Dynamic config in the config folder or use Env config.

### Env Config

Environment specific config is held with json files under the ```test_data/environment``` location. We trigger which json file to use based on input from the cmdline when the suite is ran.

We make use of the yargs module to parse a ```--Env``` argument which is then used to choose the relevant json file. A run cmd could look like this:
```
wdio run ./wdio.conf.ts --Env=dev
```
In this scenario the argument that we would use is 'dev' and therefore we would select the file test_date/environments/dev.json

There is also a built-in fallback to use the ```local.json``` file.

### Static Config
Unlike Environment specific config, static config is just always read in from ```test_data/static.json```

<br>

## Reporting

### Console Output
Console output is handled by the logging level within ```wdio.conf.ts``` and also by the wdio spec reporter which gives a summary in console at the end of a run.

### HTML Report
The HTML report uses the below two modules to be created.
- Generate cucumberJS Json (https://github.com/webdriverio-community/wdio-cucumberjs-json-reporter)
- Consume cucumber JS Json into html report (https://github.com/WasiqB/multiple-cucumber-html-reporter)

This required some additional code added to the ```onPrepare``` and ```onComplete``` Hooks within the ```wdio.conf.ts```

## Visual Validation
This project uses a combination of ```pixelmatch``` and ```pngjs``` to read in and compare an expected image (from file) against an actual image (taken at the time of validation)

There is diff logic within ```pixelmatch``` and we can attach the expected, actual or diff images to the html report for viewing/debugging a failure.

### Generating Baselines
Visual validation also requires a baseline to be set and any new visual validation scenarios will need a workflow that saves this image off. For this purpose we have a static.json data variable which can trigger this workflow. When this workflow is triggered if there is no file in the expected location the suite will save off a current screenshot to that location.

    NOTE: getvisualValidationBaseline will PASS the validation where an expected image is not found while saving off a new image.
          This should be an active choice by the person running the suite

