import { Router } from "express";
import { ActionesController } from "./controller";


export class ActioRoutes {

    static get routes(): Router {
        const router = Router();
        const actionesController = new ActionesController();

        router.get('/', actionesController.getActiones );
        router.get('/:id', actionesController.getActioPerId );

        router.post('/', actionesController.createActio );
        router.put('/:id', actionesController.updateActio );
        router.delete('/:id', actionesController.deleteActio );
        
        return router;
    }
}