const fs = require("node:fs")
let texto = fs.readFileSync("./archivo.txt","utf-8")
console.log(texto)