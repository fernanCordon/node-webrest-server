import { Router } from "express";
import { ActionesController } from "./controller";

// 11 La petición es algo así - OK
// PM PUT - localhost:3000/api/actiones/1 Y tengo que pasarle un body 
// x-www-form-urlencode (descriptio: Buy hot chocolate)

// 24 La petición es algo así - OK
// PM DELETE - localhost:3000/api/actiones/1 

export class ActioRoutes {

    static get routes(): Router {
        const router = Router();
        const actionesController = new ActionesController();

        router.get('/', actionesController.getActiones );
        router.get('/:id', actionesController.getActioPerId );
        router.post('/', actionesController.createActio );

        // 10 Actualizar
        router.put('/:id', actionesController.updateActio );

        // 23 Borrar
        router.delete('/:id', actionesController.deleteActio );
        
        return router;
    }
}