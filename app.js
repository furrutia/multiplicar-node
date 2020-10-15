const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

console.log('Base', argv.base);
console.log('Limite', argv.limite);

let comando = argv._[0];

switch (comando.toUpperCase()) {
    case 'LISTAR':
        console.log('LISTAR');
        listarTabla(argv.base, argv.limite)
            .then(tabla => console.log(`Tabla del ${argv.base} al ${argv.limite}\n${tabla}`))
            .catch(err => console.log(`Error: ${err}`))
        break;
    case 'CREAR':
        console.log('CREAR');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ colors.green(archivo) }`))
            .catch(err => console.log(`Error: ${ err } `))
        break;
    default:
        console.log(`COMANDO "${comando}" NO RECONOCIDO`);
        break;
}



//let argv2 = process.argv;

// let parametro = argv[2];
// let base = parametro.split('=')[1]