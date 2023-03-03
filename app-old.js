// const http = require('http');
import * as http from 'http';
// const server=  http.createServer((req, res)=>{
http.createServer((req, res)=>{
    console.log(req);
    //tipo texto plano
    // res.writeHead(200, {'Content-Type': 'text/plain'})
    // res.writeHead(200, {'Content-Type': 'application/json'})

    //para descargar archivos
    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    // res.writeHead(200, {'Content-Type': 'application/csv'})

    // const persona = {
    //     id:1,
    //     nombre: 'Fernando'
    // }
    // res.write(JSON.stringify(persona));
    // res.write('id, nombre\n');
    // res.write('1, Fernando\n');
    // res.write('2, Maria\n');
    // res.write('3, Juan\n');
    // res.write('4, Pedro\n');
    res.write('Hola mundo');
    res.end();
})
.listen( 8080 );

console.log('Escuchando en el puerto: 8080');