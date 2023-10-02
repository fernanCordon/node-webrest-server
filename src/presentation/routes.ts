import { Router } from "express";
import { ActioRoutes } from './actiones/routes';

// 9 PM GET - localhost:3000/api/actiones - OK

// 2 Copio esta clase

export class AppRoutes {

    static get routes(): Router {

        const router = Router();

        // 8 Borro esta linea
        // const actionesController = new ActionesController();

        // router.get('/api/actiones', actionesController.getActiones );
        // 7 Cambio el get por un use y llamo al getter routes de ActioRoutes
        router.use('/api/actiones', ActioRoutes.routes );
        
        return router;
    }
}