const csvToJson = require('convert-csv-to-json')

let inputFileName = 'demoCsvFile.csv'
let outputFileName = 'demoJsonFile.json'

csvToJson.generateJsonFileFromCsv(inputFileName,outputFileName)