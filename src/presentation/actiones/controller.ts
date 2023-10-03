import { Request, Response } from 'express';


const actiones = [ 
    { id: 1, descriptio: 'Comprar leche', creatustEst: new Date() },
    { id: 2, descriptio: 'Comprar pan', creatustEst: null },
    { id: 3, descriptio: 'Comprar mantequilla', creatustEst: new Date() }
];

export class ActionesController {

    public getActiones = (req:Request, res: Response) => {
        res.json(actiones);
    }

    public getActioPerId = (req:Request, res: Response) => {
        const id = +req.params.id;
        if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );
        const actio = actiones.find( actio => actio.id === id );
        ( actio )
          ? res.json( actio )
          : res.status( 404 ).json( { error: `Actio with id ${ id } not found` } );
    }

    // 1 EXPL Status code - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

    // 5 Al hacer un POST me envían necesariamente un body. 
    // 16 Vuelvo a mandar este
    // PM POST - http://localhost:3000/api/actiones - Selecciono Body (Las más comunes son form-data, x-www-form-urlencode o raw)
    //   Selecciono raw y luego JSON. Escribo esto
    //      { 
    //          "descriptio": "Buy video games", 
    //          "hello": "world", 
    //          "i2": 33333 
    //      }
    // - OK 

    // 17 PM GET- http://localhost:3000/api/actiones -OK Veo un nuevo elemento en la lista


    // 2 Creo método para crear una entrada. 
    public createActio = ( req: Request, res: Response ) => {

        // 6 Cojo el body de la petición
        // const body = req.body;
        // 11 Desestructuro descriptio del body
        const { descriptio } = req.body;

        // 12 Si el texto no llega
        if ( !descriptio ) return res.status( 400 ).json( { error: 'Text property is required' } );
        
        // 13 Creo la Actio
        const novaActio = {
          id: actiones.length + 1,
          descriptio: descriptio,
          creatustEst: null
        };
    
        // 14 Lo meto a la lista
        actiones.push( novaActio );
    
        // res.json( novaActio );

        // 3 Por ahora pongo esto para ver una respuesta
        // res.json('POST create actio');
        // 7 OK - No funciona porque por defecto le tengo que decir a express como quiero manejar esa serialización de las peticiones Post (Lo más común es que sea JSON)
        // res.json(body);
        // 15
        res.json( novaActio );

    };

}