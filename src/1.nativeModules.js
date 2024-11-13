const os = require("node:os")
// en los tres puntitos en la palabra donde  dice REQUIRE DE AHI ARRIBA 👆 
// darle a ctrl + . y lo convierte a "ecmascript modules" (mjs)
// asi se veria, abajo ya esta convertido 

console.log("Nombre del sistema operativo",os.platform())
console.log("Version del sistema operativo",os.release())
console.log("Arquitectura",os.arch())
// console.log("CPUS",os.cpus())
console.log("Memoria Libre",os.freemem()/1024/1024)
console.log("Memoria Total",os.totalmem()/1024/1024)
console.log("uptime",os.uptime()/60/60)
console.log("Version de del sistema:  ",os.version())
console.log("Nombre de la PC: ",os.hostname())
console.log("Ruta principal: ",os.homedir())
console.log("Tipo de maquina: ",os.machine())
console.log("Tipo de maquina: ",os.type())
console.log("Info resumida: ",os.userInfo())


/* 

import { platform, release, arch, freemem, totalmem, uptime, version, hostname, homedir, machine, type, userInfo } from "node:os"

console.log("Nombre del sistema operativo",platform())
console.log("Version del sistema operativo",release())
console.log("Arquitectura",arch())
// console.log("CPUS",os.cpus())
console.log("Memoria Libre",freemem()/1024/1024)
console.log("Memoria Total",totalmem()/1024/1024)
console.log("uptime",uptime()/60/60)
console.log("Version de del sistema:  ",version())
console.log("Nombre de la PC: ",hostname())
console.log("Ruta principal: ",homedir())
console.log("Tipo de maquina: ",machine())
console.log("Tipo de maquina: ",type())
console.log("Info resumida: ",userInfo()) 
*/