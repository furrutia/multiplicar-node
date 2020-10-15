const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        let tabla = obtenerTabla(base, limite);
        let nombreArchivo = `tabla-${base}-al-${limite}.txt`

        const data = new Uint8Array(Buffer.from(tabla));

        fs.writeFile(`tablas/${nombreArchivo}`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`${nombreArchivo}`);
        });

    });

}

let listarTabla = (base, limite) => {

    console.log('====================='.green);
    console.log(`tabla de ${base} al ${limite}`.green);
    console.log('====================='.green);

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        let tabla = obtenerTabla(base, limite);

        resolve(tabla);
    });

}

let obtenerTabla = (base, limite) => {
    let tabla = '';
    for (let i = 1; i <= limite; i++) {
        tabla += `${base}*${i} = ${ base * i}\n`;
    }
    return tabla;
}

module.exports = {
    crearArchivo,
    listarTabla
}