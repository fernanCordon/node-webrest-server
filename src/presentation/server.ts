import express, { Router } from 'express';
import path from 'path';


interface Optiones {
    port: number;
    public_path?: string;
    routes: Router;
}

export class Server {

    private app = express();

    private readonly port: number;
    private readonly publicPath: string;
    private readonly routes: Router;

    constructor(optiones: Optiones) {
        const { port, routes, public_path = 'public' } = optiones;

        this.port = port;
        this.publicPath = public_path;
        this.routes = routes;
    }

    // 10 PM POST - http://localhost:3000/api/actiones 
    //   Selecciono body x-www-form-urlencode. Escribo esto
    //      descriptio: Beber agua
    //      id: 34343
    //      hola: mundo, 
    //      boolean: true 
    // - OK 

    async incipiare() {

        // 8 Hay un middelware en express que sirve para parsear la información del body y transformarla en un Json.
        // Cualquier petición que llegue la pasa por aquí y si trae un body, su información (text, xml, etc) lo convierte a json
        // PM POST - OK
        this.app.use( express.json() );

        // 9 Para peticiones cuyo body tiene información x-www-for-urlencode
        this.app.use( express.urlencoded({ extended: true }) );

        this.app.use( express.static( this.publicPath ) );

        this.app.use( this.routes );

        this.app.get('*', (req, res) => {
            const indexPath = path.join(__dirname + `../../../${ this.publicPath }/index.html`);
            res.sendFile(indexPath);
        });


        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${ this.port }`);
        }) 
    }

    
}