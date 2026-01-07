import {readdir, stat } from 'node:fs/promises';
import {join} from 'node:path';


//1.Recuperar la carpeta a listar
const dir = process.argv[2] ?? '.';

//2. Formateo simple de los tamaños
const formatBytes = (size) => {
    if (size < 1024) return size + ' B';
    return (size / 1024).toFixed(2) + ' KB';
}

const files = await readdir(dir);
//recuperar info de cada file
const entries = await Promise.all(
    files.map(async (name) => {
        const fullPath = join(dir, name);
        const info = await stat(fullPath);
        return { name, isDir: info.isDirectory(), size: formatBytes(info.size) };
    })
);


for (const entry of entries) {
    const icon = entry.isDirectory ? '📁' : '📄';
    const size = entry.isDirectory ? '' : ` - ${entry.size}`;
    console.log(`${icon} ${entry.name} ${size}`);
}
