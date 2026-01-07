import os from 'node:os';
//Aqui va al node_modules para traer el paquete ms
import ms from 'ms';

const systemInfo = {    
    platform: os.platform(),
    cpuCores: os.cpus().length,
    totalMemoryMB: Math.round(os.totalmem() / (1024 * 1024)),
    freeMemoryMB: Math.round(os.freemem() / (1024 * 1024)),
    //Usando el ms para formatear el tiempo de actividad del sistema
    uptime: ms(os.uptime() * 1000, {long: true})
};

console.log(systemInfo);
