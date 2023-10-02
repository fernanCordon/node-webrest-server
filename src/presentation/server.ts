// 10
import express from 'express';
// 20
import path from 'path';

// 6 Creo carpeta presentation/
// Creo archivo server.ts en presentation/

// 9 Terminal: npm install express
// Terminal: npm i --save-dev @types/express (Tipos para TS)

// 17 En Recursos tengo react-app-router/ . Es una aplicación con un sistema de rutas de tipo SPA (Todo ocurre en una ruta pero simula que hay más rutas ).
// Elimino lo que hay en public/
// Copio lo de eact-app-router/ y lo meto a public/ 

// 18 Entro a cualquier ruta (localhost:3000/marvel) desde la app y la veo. Pero si recargo el navegador y no funciona porque no hay ninguna carpeta marver en el proyecto

// 28 Interface para las variables de entorno
interface Optiones {
    port: number;
    public_path?: string;
}

// 7
export class Server {

    // 11 Aplicación de express
    private app = express();

    // 29 Propiedades para el puerto y la ruta
    private readonly port: number;
    private readonly publicPath: string;

    // 30 Constructor
    constructor(optiones: Optiones) {
        const { port, public_path = 'public' } = optiones;
        this.port = port;
        this.publicPath = public_path;
    }

    // 8 Método vacío. En el anterior proyecto lo hice static, ahora no. También se puede hacer así
    async incipiare() {

        // 16 Para que pueda leer lo de public/  creo este middelware. Un middelware es algo que se ejecuta cuando se pasa por una ruta.
        //server.ts Podríamos haber añadido la ruta ('/', express.static('public')); Pero la ruta '/' no hace falta ponerla
        // this.app.use( express.static('public') );
        // 31 this.publicPath
        this.app.use( express.static( this.publicPath ) );

        // 19 Cualquier otra petición GET retorno el path a '/'. Para que funcione como un SPA
        this.app.get('*', (req, res) => {
            // 21 Tengo que poner el path absoluto
            // const indexPath = path.join(__dirname + '../../../public/index.html');
            // 32 batticks y this.publicPath
            const indexPath = path.join(__dirname + `../../../${ this.publicPath }/index.html`);

            // 22 - OK Ya funciona. Y al recargar las rutas también se ven
            res.sendFile(indexPath);
        });

        // 12 Pongo a la aplicacion de express a escuchar peticiones
        // this.app.listen(3000, () => {
        // 33 this.port
        this.app.listen(this.port, () => {
            // console.log(`Server running on port ${ 3000 }`);
            // 34 this.port
            console.log(`Server running on port ${ this.port }`);
        }) 
    }

    
}