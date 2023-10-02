// 14 Importo el Router
import express, { Router } from 'express';
import path from 'path';


interface Optiones {
    port: number;
    public_path?: string;
    // 13 Recibo un router como argumento en las opciones. Asi podré asociar el archivo router con el server 
    routes: Router;
}


export class Server {

    private app = express();

    private readonly port: number;
    private readonly publicPath: string;
    // 15
    private readonly routes: Router;

    constructor(optiones: Optiones) {
        // const { port, public_path = 'public' } = optiones;
        // 16 Lo desestructuro
        const { port, routes, public_path = 'public' } = optiones;

        this.port = port;
        this.publicPath = public_path;
        // 17 Lo inicializo
        this.routes = routes;
    }

    // 1 EXPL - Además de tener un Web server quiero hacer un Rest server y que a partir de rutas endpoints como localhost:3000/api/actiones nos devuelva un Json con los datos.

    // 4 PM GET - http://localhost:3000/api/actiones - OK

    async incipiare() {

        this.app.use( express.static( this.publicPath ) );

        // 2 Voy a definir una ruta
        // 10 Corto este bloque
        // this.app.get('/api/actiones',  (req, res) => {
            // 3 devuelvo una lista de Jsons (Si la acción no está hecha será null su fecha)
            // res.json([
                // { id: 1, descriptio: 'Comprar leche', creatustEst: new Date() },
                // { id: 2, descriptio: 'Comprar pan', creatustEst: null },
                // { id: 3, descriptio: 'Comprar mantequilla', creatustEst: new Date() }
            // ]);
        // });

        // 18 Cuando pasa por la ruta que hay en routes lanzará la función que hay allí. 
        // Hemos conseguido que en este archivo ya no se vean las rutas concretas ni la implementación
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