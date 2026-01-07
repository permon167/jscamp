import {readFile, writeFile} from "node:fs/promises"
import {join, basename, extname} from "node:path"

const content = await readFile("./archivo.txt", "utf-8")
console.log(content)

const uppercaseContent = content.toUpperCase()

await writeFile("./archivo-mayusculas.txt", uppercaseContent)
console.log("Archivo creado con contenido en mayúsculas.")