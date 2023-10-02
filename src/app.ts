import { Server } from './presentation/server';
import { envs } from './config/envs';
import { AppRoutes } from './presentation/routes';


( async() => {
     main();
})();

// 20 PM GET - 3000/api/actiones - OK

function main() {
    const server = new Server({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH,
        // 19 Y le paso las rutas accediendo a la variable computada
        routes: AppRoutes.routes,
    });

    server.incipiare();

}