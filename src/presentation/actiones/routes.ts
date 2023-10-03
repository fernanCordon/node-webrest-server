import { Router } from "express";
import { ActionesController } from "./controller";


export class ActioRoutes {

    static get routes(): Router {
        const router = Router();
        const actionesController = new ActionesController();

        router.get('/', actionesController.getActiones );
        router.get('/:id', actionesController.getActioPerId );

        // 4 Ruta post
        router.post('/', actionesController.createActio );
        
        return router;
    }
}