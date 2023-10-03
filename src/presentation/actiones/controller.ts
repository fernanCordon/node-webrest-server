import { Request, Response } from 'express';

// 3 PM GET - http://localhost:3000/api/actiones - OK

// 4 EXPL - Si quisiera traer el objeto con id=1 debería ser así http://localhost:3000/api/actiones/1
// Cuando recibimos los argumentos por los query parameters o segmentos de ruta son siempre strigs (los tendríamos que transfromar a numero)

// 2 Lo pego en esta const
const actiones = [ 
    { id: 1, descriptio: 'Comprar leche', creatustEst: new Date() },
    { id: 2, descriptio: 'Comprar pan', creatustEst: null },
    { id: 3, descriptio: 'Comprar mantequilla', creatustEst: new Date() }
];

export class ActionesController {

    public getActiones = (req:Request, res: Response) => {
            
        // res.json([
        //     { id: 1, descriptio: 'Comprar leche', creatustEst: new Date() },
        //     { id: 2, descriptio: 'Comprar pan', creatustEst: null },
        //     { id: 3, descriptio: 'Comprar mantequilla', creatustEst: new Date() }
        // ]);
        // 1 Copio el array de objetos para llevarlo arriba
        res.json(actiones);
    }

    // 6 Método
    public getActioPerId = (req:Request, res: Response) => {

        // 7 Saco de la petición el param id 
        // const id = req.params.id;
        // 9 Con el + lo convierto en numero ya todos los arg y queryparameters de la ruta son strings - OK
        const id = +req.params.id;

        // 10 Si lo que me envían no es un número hago esta validación en la ruta
        if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );
    
        // 11 Busco la actio con ese id
        const actio = actiones.find( actio => actio.id === id );
        
        // 14 Condición ternaria - OK Lo pruebo
        ( actio )
          ? res.json( actio )
          : res.status( 404 ).json( { error: `Actio with id ${ id } not found` } );

        // 8 - PM GET localhost:3000/api/actiones/1 - OK Veo que el número es un string
        // res.json({ id });
        // 12 Devuelvo la actio
        // 13 Lo borro
        // res.json( actio );
    }

}