import { Request, Response } from 'express';


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


    public updateActio = ( req: Request, res: Response ) => {

        const id = +req.params.id;
        if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );
        
        const actio = actiones.find( actio => actio.id === id );

        if ( !actio ) return res.status( 404 ).json( { error: `Actio with id ${ id } not found` } );
        
        const { descriptio, completumEst } = req.body;

        actio.descriptio = descriptio || actio.descriptio;

        ( completumEst === 'null' )
          ? actio.completumEst = null
          : actio.completumEst = new Date( completumEst || actio.completumEst );

        res.json( actio );
      }


    public deleteActio = (req:Request, res: Response) => {

        const id = +req.params.id;
        const actio = actiones.find(actio => actio.id === id );
        if ( !actio ) return res.status(404).json({ error: `Actio with id ${ id } not found` });
        actiones.splice( actiones.indexOf(actio), 1 );
        res.json( actio );
    }

}