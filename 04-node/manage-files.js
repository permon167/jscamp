import {mkdir, readFile, writeFile} from "node:fs/promises"
import {join, basename, extname} from "node:path" // el path para manejar rutas en Windows

let content = ""
//permisos en terminal con --allow fs-read --allow fs-write=...
if(process.permissions.has("fs:read", "archivo.txt")){
    content = await readFile("archivo.txt", "utf-8")
    console.log(content)
}else{
    console.log("No tienes permiso para leer el archivo.")
}

if (process.permissions.has("fs:write", "output/files/documents")) {
    //join para crear rutas de forma correcta para Windows, Linux, Mac
    const outputDir = join("output", "files", "documents")
    await mkdir(outputDir, { recursive: true })

    const uppercaseContent = content.toUpperCase()
    const outputFilePath = join(outputDir, "archivo-mayusculas.txt")

    //basename y extname para manejar nombres y extensiones de archivos
    console.log(basename(outputFilePath, extname(outputFilePath))) // archivo-mayusculas

    await writeFile(outputFilePath, uppercaseContent)
    console.log("Archivo creado con contenido en mayúsculas.")
} else {
    console.log("No tienes permiso para escribir en el directorio.")
}
