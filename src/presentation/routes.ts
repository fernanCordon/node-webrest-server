// 7 Lo importo de express
import { Router } from "express";
import { ActionesController } from './actiones/controller';

// 5 Creo archivo routes.ts en presentation/ para poner en él las rutas

// 30 PM GET - ...3000/api/actiones - OK

export class AppRoutes {

    // 6 Mientras no hagamos ID (en los que se necesita instancias) podemos manejarnos con métodos estáticos o propiedades estáticas (getters).
    // Esta propiedad computada devuelve un Router
    static get routes(): Router {

        // 8 Creo el Router
        const router = Router();

        // 27 Creo instancia del controlador
        const actionesController = new ActionesController();

        // 11 Lo pego 
        // this.app.get('/api/actiones',  (req, res) => {
        // 12 Sustituyo this.app por router
        // router.get('/api/actiones',  (req, res) => {
        //     res.json([
        //         { id: 1, descriptio: 'Comprar leche', creatustEst: new Date() },
        //         { id: 2, descriptio: 'Comprar pan', creatustEst: null },
        //         { id: 3, descriptio: 'Comprar mantequilla', creatustEst: new Date() }
        //     ]);
        // });

        // 24 Corto la función (req, res) => { res.json([....]}
        // router.get('/api/actiones',  );
        // 28 Y mando el método del controlador
        // router.get('/api/actiones', (req, res) => actionesController.getActiones(req, res) );
        // 29 Y mando solo la referencia a la función, es lo mismo
        router.get('/api/actiones', actionesController.getActiones );
        
        // 9 Lo devuelvo
        return router;
    }
}