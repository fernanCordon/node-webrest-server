import { Server } from './presentation/server';
import { envs } from './config/envs';
// 2 Creo archivo app.ts en src/

// 5 Terminal npm run dev

// 3 Función anónima autoinvocada
( async() => {
     main();
})();

// 4
function main() {
    // 13 lo borro
    // console.log('main');

    // 14 Instancia del servidor
    // const server = new Server();
    // 35 Le envío el objeto de opciones 
    const server = new Server({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH,
    });

    // 15 - OK En el Navegador encuentra algo: Dice Cannot GET (es una buena señal)
    server.incipiare();

}