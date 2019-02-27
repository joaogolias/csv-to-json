import { SetUp } from "./baseModel";
import { Product } from "./models/product";

export const setUp: SetUp[] = [
    { inputPath: "input/produtosandorinha.csv", outputPath: "output/products.json", object: new Product(), delimiter: "\n" },
    { inputPath: "input/produtosandorinha.csv", outputPath: "output/products2.json", object: new Product(), delimiter: "\n" }
]