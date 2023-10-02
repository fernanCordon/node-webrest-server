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



    async incipiare() {

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