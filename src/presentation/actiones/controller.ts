import { Request, Response } from 'express';
import { prisma } from '../../data/postgres/index';

// 28 PM Hago las pruebas:
// POST- localhost:3000/api/actiones - Body, raw, Json { "descriptio": "Buy milk",  "hello": "world", "id": 4105 } - OK
// GET- localhost:3000/api/actiones - OK
// PUT - localhost:3000/api/actiones/2 - Body, x-www.. descriptio: Buy hot chocolate
// PUT - localhost:3000/api/actiones/2 - Body, x-www.. descriptio: Buy hot chocolate, completumEst: 2023-10-21 - OK
// DELETE- localhost:3000/api/actiones/1 - OK

// 9 Elimino esta lista porque ya no la necesitaré
// const actiones = [ 
//     { id: 1, descriptio: 'Comprar leche', completumEst: new Date() },
//     { id: 2, descriptio: 'Comprar pan', completumEst: null },
//     { id: 3, descriptio: 'Comprar mantequilla', completumEst: new Date() }
// ];

export class ActionesController {

  // 2 Aunque ahora no lo usaré pongo el constructor de la clase por si luego necesito hacer Inyección de dependencias
  constructor() { }

  // public getActiones = (req:Request, res: Response) => {
  // 10 async
  public getActiones = async(req:Request, res: Response) => {
    // 11
    const actiones = await prisma.actio.findMany();

    res.json(actiones);
  }

  // public getActioPerId = (req:Request, res: Response) => {
  // 12 async
  public getActioPerId = async(req:Request, res: Response) => {
    const id = +req.params.id;
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );
    
    // 13 Lo borro
    // const actio = actiones.find( actio => actio.id === id );

    // 14
    const actio = await prisma.actio.findFirst({
      where: { id }
    });

    ( actio )
      ? res.json( actio )
      : res.status( 404 ).json( { error: `Actio with id ${ id } not found` } );
  }

  // 8 PM POST Body - raw - Json 
  // { "descriptio": "Buy video games", "hello": "world",  "id": 33333 }
  // Me muestra en PM que es el id 1 (porque es el primero de la db). Voy a Table Plus - CMD+R - OK

  // public createActio = ( req: Request, res: Response ) => {
  // 4 async
  public createActio = async ( req: Request, res: Response ) => {
    const { descriptio } = req.body;
    if ( !descriptio ) return res.status( 400 ).json( { error: 'Text property is required' } );
    
    // 3 Crear una actio en db (prisnma se importa de ../../data/postgres/index)
    const actio = await prisma.actio.create({
      data: { descriptio } // { descriptio: descriptio }

    });

    // 5 Ya no necesito este novaActio
    // const novaActio = {
    //   id: actiones.length + 1,
    //   descriptio: descriptio,
    //   completumEst: null
    // };
    
    // 6 No hace falta porque está grabado en db
    // actiones.push( novaActio );

    // res.json( novaActio );
    // 7
    res.json( actio );
  };


  // public updateActio = ( req: Request, res: Response ) => {
  // 15 async
  public updateActio = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );
    
    // 16 borro
    // const actio = actiones.find( actio => actio.id === id );

    // 17
    const actio = await prisma.actio.findFirst({
      where: { id }
    });

    if ( !actio ) return res.status( 404 ).json( { error: `Actio with id ${ id } not found` } );
    
    const { descriptio, completumEst } = req.body;

    // 18 Lo borro (lo haré de otro modo)
    // actio.descriptio = descriptio || actio.descriptio;

    // 19 Lo borro (lo haré de otro modo)
    // ( completumEst === 'null' )
    //   ? actio.completumEst = null
    //   : actio.completumEst = new Date( completumEst || actio.completumEst );

    // 20 Actualizo con el descriptio y el completumEst, si es que viene.
    const updatedActio = await prisma.actio.update({
      where: { id },
      data: { 
        descriptio, 
        completumEst: (completumEst) ? new Date(completumEst) : null
      }
    });

    // res.json( actio );
    // 21
    res.json( updatedActio );
  }


  // public deleteActio = (req:Request, res: Response) => {
  // 22 async
  public deleteActio = async(req:Request, res: Response) => {
    const id = +req.params.id;

    // 23 Lo borro
    // const actio = actiones.find(actio => actio.id === id );

    // 24
    const actio = await prisma.actio.findFirst({
      where: { id }
    });

    if ( !actio ) return res.status(404).json({ error: `Actio with id ${ id } not found` });
    
    // 25 Lo borro
    // actiones.splice( actiones.indexOf(actio), 1 );

    // 26 Elimino el actio
    const deleted = await prisma.actio.delete({
      where: { id }
    });

    // res.json( actio );
    // 27 Si deleted existe 
    ( deleted )
      ? res.json( deleted )
      : res.status(400).json({ error: `Actio with id ${ id } not found`});
  }

}