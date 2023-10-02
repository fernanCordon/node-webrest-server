// 26 Las importo de express
import { Request, Response } from 'express';

// 21 Creo carpeta presentation/actiones/ para el controlador de la ruta actiones
// Creo el archivo controller.ts dentro de actiones/

// 22 EXPL - No va a tener métodos estáticos porque en los controladores haremos Inyección de dependencias DI

// 23 Creo clase vacía
export class ActionesController {

    // 25 Lo pego en el método getActiones y le pongo el tipo a req y res
    public getActiones = (req:Request, res: Response) => {
            
        res.json([
            { id: 1, descriptio: 'Comprar leche', creatustEst: new Date() },
            { id: 2, descriptio: 'Comprar pan', creatustEst: null },
            { id: 3, descriptio: 'Comprar mantequilla', creatustEst: new Date() }
        ]);
    }

}