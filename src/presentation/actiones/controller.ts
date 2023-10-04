import { Request, Response } from 'express';

// 1A Cambio todos los creatustEst por completumEst
const actiones = [ 
    { id: 1, descriptio: 'Comprar leche', completumEst: new Date() },
    { id: 2, descriptio: 'Comprar pan', completumEst: null },
    { id: 3, descriptio: 'Comprar mantequilla', completumEst: new Date() }
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


    public createActio = ( req: Request, res: Response ) => {
        
        const { descriptio } = req.body;
        if ( !descriptio ) return res.status( 400 ).json( { error: 'Text property is required' } );
        
        const novaActio = {
          id: actiones.length + 1,
          descriptio: descriptio,
          completumEst: null
        };
    
        actiones.push( novaActio );
        res.json( novaActio );
    };


    // 16 PM PUT - localhost:3000/api/actiones/1 Y tengo que pasarle un body 
    // x-www-form-urlencode (descriptio: Buy hot chocolate, completumEst: null)
    // completumEst: 2023-10-21 ) -OK Cambia la fecha

    // 1B Actualizar
    public updateActio = ( req: Request, res: Response ) => {

        // 2 Cojo el id de la petición, los params de la url, y lo convierto a núero
        const id = +req.params.id;

        // 3 Validación
        if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );
        
        // 4 Busco el actio
        const actio = actiones.find( actio => actio.id === id );

        // 5 En caso de que no exista
        if ( !actio ) return res.status( 404 ).json( { error: `Actio with id ${ id } not found` } );


        // 6 Ya sé que tenemos un actio, extraigo de ella la descriptio
        // const { descriptio  } = req.body;
        // 12 Si viene también la fecha
        const { descriptio, completumEst } = req.body;

        // 7 
        // 14 Lo borro
        // if ( !descriptio ) return res.status( 404 ).json( { error: `Descriptop property is required` } );
        
        // 8 Actualizo el actio y como en JS los objetos pasan por referencia actualizo directamente la descriptio. Esto no está bien hecho y cuando estemos en db no ocurrirá
        // actio.descriptio = descriptio;
        // 15 Puede llegar o no llegar la descriptio
        actio.descriptio = descriptio || actio.descriptio;

        // 13 Por si tiene fecha o no (En la app, si no tiene fecha es por que la tarea no ha sido realizada todavía)
        ( completumEst === 'null' )
          ? actio.completumEst = null
          : actio.completumEst = new Date( completumEst || actio.completumEst );
        
        // 9
        res.json( actio );
      }


    // 17 Método del borrado
    public deleteActio = (req:Request, res: Response) => {

        // 18 Me pasan el id en la url y lo convierto en número
        const id = +req.params.id;
        
        // 19 Lo busco
        const actio = actiones.find(actio => actio.id === id );

        // 20
        if ( !actio ) return res.status(404).json({ error: `Actio with id ${ id } not found` });
    
        // 21 Corto un elemento del array, El primer parámetro es una referencia al objeto y el segundo que solo va ha quitar un elemento. Finalmente nos quedamos con el array sin el elemento.
        actiones.splice( actiones.indexOf(actio), 1 );

        // 22
        res.json( actio );

    }

}