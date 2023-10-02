import express from 'express';
import path from 'path';


interface Optiones {
    port: number;
    public_path?: string;
}


export class Server {

    private app = express();

    private readonly port: number;
    private readonly publicPath: string;

    constructor(optiones: Optiones) {
        const { port, public_path = 'public' } = optiones;
        this.port = port;
        this.publicPath = public_path;
    }

    async incipiare() {

        this.app.use( express.static( this.publicPath ) );

        this.app.get('*', (req, res) => {
            const indexPath = path.join(__dirname + `../../../${ this.publicPath }/index.html`);
            res.sendFile(indexPath);
        });

        // 6 En el package.json dejo el script start así:
        // "start": "node deis/app.js"
        // Porque el comando npm run build que he quitado ya lo hace Railway en el proceso de construcción

        // 7 Hago otro Commit: 
        // git add .  
        // git commit -m "Mensaje en español y modifico el package.json"
        // git push

        // 8 GitHub se sincroniza con Railway y se hace un nuevo desliegue automáticamente




        this.app.listen(this.port, () => {
            console.log(`Server running on port ${ this.port }`);
            // 5 Cambio este console después del despliegue
            // console.log(`Servidor corriendo en el puerto ${ this.port }`);
        }) 
    }

    
}