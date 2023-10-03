import { Router } from "express";
import { ActioRoutes } from './actiones/routes';



export class AppRoutes {

    static get routes(): Router {

        const router = Router();

        router.use('/api/actiones', ActioRoutes.routes );
        
        return router;
    }
}