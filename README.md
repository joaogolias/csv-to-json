## CSV TO JSON 

### **Pre-Requisites**
This Script is to convert a CSV to a JSON file. It uses Typescript, so it's necessary your computer
to have Node.js and Typescript installed.


To install Node.js, follow the steps in its site: https://nodejs.org/en/download/


We recommend you to downlaod yarn and not only npm for package management. Yarn is told to be more effective and simpler in some cases. To do so, run the following command:
```
npm install -g yarn
```

Typescript must be downloaded globally too to be able to transpile Typescript files to Javascript, which can be compiled easily with Node.js. The following three commands do them respectively.
```
npm install -g typescript 
tsc <typescript file path>.ts
node <transpiled javascript file path>.js
```


### **Script Description**
This script uses a lib called 'csv-parse' that converts the content of a csv file into arrays; and 'fs' a Node.js module used to open and write files. It was made to be a generic conversor of CSV file to JSON, hence it has a setup file and models directory. 


If you wish to add a new csv parser, you need to create a new model first. It must extend the BaseModel and implement the abstract function *convertTextToModel*, which is responsible for converting the pattern of csv to a typescript object. In *setup.js*, you have to add a object in its array in: *inputPath* is the path to csv that you wish to convert and, just for pattern, the file should be added to *src/input* directory; outputPath is the path, to which the *.json* file will be added; *object* is the model created in model folder and *delimiter* (optional) is the delimiter of csv folder, usually a comma, which is the default value. There is an example here, see it, if needed.

### **Running**
Remeber to have all node modules and libs installed, running one of the following scripts
```
npm install
yarn install
```
For running the script, use one of the commands below
```
npm run execute
yarn execute
```

