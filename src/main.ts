import * as parser from 'csv-parse'
import { setUp } from './setup'
import { BaseModel } from './baseModel'
import fs = require('fs')

const rightDirName = __dirname.replace("build", "src")

const handleOnFinish = async (array: BaseModel[], outputPath: string) => {
    const arrayJson = JSON.stringify(array)
    await fs.writeFile(rightDirName + `/${outputPath}` , arrayJson, (err) => {
        if (err) {
            console.error(err);
            return;
        };
        console.log("File has been created");
    });
}

const main = async () => {
    for(const config of setUp) {
        const newObjects: BaseModel[] = []
        
        await fs.createReadStream(rightDirName + `/${config.inputPath}`, { encoding: 'utf8' })
            .pipe(parser({delimiter: config.delimiter || ','}))
            .on('data', (data) => {
                const convertedData = config.object.convertTextToModel(data)
                newObjects.push(convertedData)
            })
            .on('end', () => {
                // console.log(newProducts)
                handleOnFinish(newObjects, config.outputPath)
            })
        console.log(newObjects)
    }
}



main()

