// 4 Me he puesto sobre Router CMD+. para importarlo
import { Router } from "express";
// 5 Me he puesto sobre ActionesController CMD+. 
import { ActionesController } from "./controller";

// 1 Creo archivo routes.ts dentro de actiones/ Sera nuestro nuevo sistema de rutas para lo que sea relaccionado a los Actio


// 3 La pego y renombro la clase de AppRoutes a ActioRoutes
export class ActioRoutes {

    static get routes(): Router {

        const router = Router();

        const actionesController = new ActionesController();

        // router.get('/api/actiones', actionesController.getActiones );
        // 6 Cambio la ruta. Al poner '/' asumo que delante va '/api/actiones' (lo que está en el otro archivo). 
        router.get('/', actionesController.getActiones );
        
        return router;
    }
}