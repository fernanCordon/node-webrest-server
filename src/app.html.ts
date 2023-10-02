import http from 'http';
import fs from 'fs';


const server = http.createServer((req, res) => {

    console.log(req.url);

    // res.write('Hola Mundo');
    // res.end();

    // res.writeHead(200, { 'Content-Type': 'text/html' });
    // res.write('<h1>Hola Mundo</h1>');
    // res.write(`<h1>URL ${ req.url }</h1>`);
    // res.end();

    // const data = { nomen: 'Jhon Doe', aetas: 30, urbs: 'New York' };
    // res.writeHead(200, { 'Content-Type': 'application/json' });
    // res.end( JSON.stringify(data));

    if ( req.url === '/' ) {
        const htmlFile = fs.readFileSync('./public/index.html', 'utf-8');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end( htmlFile );

        return;
    }

    if ( req.url?.endsWith('.js') ) {
        res.writeHead(200, { 'Content-Type': 'application/javascript' });
    } else if ( req.url?.endsWith('.css') ) {
        res.writeHead(200, { 'Content-Type': 'text/css' });
    }

    const responsumContent = fs.readFileSync(`./public${ req.url }`, 'utf-8');
    res.end(responsumContent);

});

server.listen(8080, () => {
    console.log('Server running on port 8080');
});