export abstract class BaseModel {
    abstract convertTextToModel(text: string): BaseModel
}

export interface SetUp {
    inputPath: string
    outputPath: string
    object: BaseModel
    delimiter?: string
}