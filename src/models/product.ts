import { BaseModel } from "../baseModel";

export class Product extends BaseModel{
    public codigo: String
    public setor: String
    public desc: String
    public descPdv: String
  
    public convertTextToModel(text: string): Product {
        const splitText = text[0].split('|')
        const prod = new Product()
        prod.codigo = splitText[0]
        prod.setor = ""
        prod.desc = splitText[1]
        prod.descPdv = splitText[1]
        return prod
    }

    static parseTextToProduct(text: String[], array: Product[]) {
        
    }
}