import { Router } from "express";
import { ActionesController } from "./controller";


export class ActioRoutes {

    static get routes(): Router {

        const router = Router();

        const actionesController = new ActionesController();

        router.get('/', actionesController.getActiones );

        // 5 Nueva ruta que recibe un argumento que lo llamo id
        router.get('/:id', actionesController.getActioPerId );
        
        return router;
    }
}