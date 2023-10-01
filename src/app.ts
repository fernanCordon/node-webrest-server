import http from 'http';
// 15 importo
import fs from 'fs';


// 6 Navegador localhost:8080/hola, localhost:8080/fernando  localhost:8080/bicicletas

const server = http.createServer((req, res) => {

    console.log(req.url);

    // 1 Lo borro
    // res.write('Hola Mundo');
    // res.end();

    // 7 Comento las tres lineas para hacer otro tipo de respuesta

    // 2 Envío el status y el header de la respuesta
    // res.writeHead(200, { 'Content-Type': 'text/html' });
    // 3
    // res.write('<h1>Hola Mundo</h1>');
    // 5 Server-side rendering (Html generado del lado del servidor. El JS no llega al navegador)
    // res.write(`<h1>URL ${ req.url }</h1>`);
    // 4 - OK 
    // res.end();


    // 11 Comento las tres lineas

    // 8 Creo este objeto (* nombre, edad y ciudad)
    // const data = { nomen: 'Jhon Doe', aetas: 30, urbs: 'New York' };
    // 9 Mandaré la información en un Json 
    // res.writeHead(200, { 'Content-Type': 'application/json' });
    // 10 Nos ahorramos el write así. Es como el write y el end juntos - OK lo veo
    // res.end( JSON.stringify(data));

    // 14 Si voy a localhost:8080 leeré ese index.html
    if ( req.url === '/' ) {
        // 16
        const htmlFile = fs.readFileSync('./public/index.html', 'utf-8');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end( htmlFile );

    // 22 Quito el else 
    // } else {
        // 17
    //     res.writeHead(404, { 'Content-Type': 'text/html' });
    //     res.end();

        // 23 Ya no sigo
        return;
    }

    // 24 Para que devuelva archivos js o css
    if ( req.url?.endsWith('.js') ) {
        res.writeHead(200, { 'Content-Type': 'application/javascript' });
    } else if ( req.url?.endsWith('.css') ) {
        res.writeHead(200, { 'Content-Type': 'text/css' });
    }

    // 25 - OK veo la página verde y el clg en la terminal del navegador
    const responsumContent = fs.readFileSync(`./public${ req.url }`, 'utf-8');
    res.end(responsumContent);

});

server.listen(8080, () => {
    console.log('Server running on port 8080');
});