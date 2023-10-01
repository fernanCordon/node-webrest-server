// 8 Importo el http: El http no tiene un certificado SSL como el https
import http from 'http';

// 4 Creo carpeta src/
// creo archivo app.ts en src/

// 6 Terminal: rpm run dev - OK

// 5 Hago algo en Ts: interface, constante saludo, desestruc y clg 
// 7 Lo borro
// interface Salve { 
//     expressio: string 
// }
// const saludo: Salve = { expressio: 'Hola' };
// const { expressio } =  saludo;
// console.log(`${ expressio } mundo`);

// 12 Navegador localhost:8080 y se imprime en la clg del servidor (VSCode)  /
// Navegador localhost:8080/browser y se imprime en el servidor  /browser

// 14 Akora se ve Hola Mundo en la web

// 15 Creo .gitignore y pongo: node_modules/

// 9 Servidor. Recibimos la request (lo que se solicita) y la response (lo que se responde)
const server = http.createServer((req, res) => {
    // 10
    console.log(req.url);

    // 13 Voy a responder algo y cierro la escritura
    res.write('Hola Mundo');
    res.end();
});

// 11 Puerto - localhost:8080
server.listen(8080, () => {
    console.log('Server running on port 8080');
});