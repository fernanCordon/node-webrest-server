import { Request, Response } from 'express';


export class ActionesController {

    public getActiones = (req:Request, res: Response) => {
            
        res.json([
            { id: 1, descriptio: 'Comprar leche', creatustEst: new Date() },
            { id: 2, descriptio: 'Comprar pan', creatustEst: null },
            { id: 3, descriptio: 'Comprar mantequilla', creatustEst: new Date() }
        ]);
    }

}