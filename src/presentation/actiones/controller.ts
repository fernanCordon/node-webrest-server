import { Request, Response } from 'express';
import { prisma } from '../../data/postgres/index';
// 11 Lo traigo del archivo de barril
import { CreateActioDto, UpdateActioDto } from '../../domain/dtos';



export class ActionesController {

  constructor() { }

  public getActiones = async(req:Request, res: Response) => {
    const actiones = await prisma.actio.findMany();

    res.json(actiones);
  }

  public getActioPerId = async(req:Request, res: Response) => {
    const id = +req.params.id;
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );
    
    const actio = await prisma.actio.findFirst({
      where: { id }
    });

    ( actio )
      ? res.json( actio )
      : res.status( 404 ).json( { error: `Actio with id ${ id } not found` } );
  }

  // 17 PM POST Body x-www-url.. description: Buy the latest zelda game - OK
  // 18 PM POST Body x-www-url.. No envío nada en description - OK Me sale el mensaje de error

  public createActio = async ( req: Request, res: Response ) => {
    // 12 Lo borro
    // const { descriptio } = req.body;

    // 14 El Dto me trae una lista con dos elementos (desestructuración de arrays). 
    // Le mando el req.body que es un objeto
    const [error, createActioDto] = CreateActioDto.create(req.body)

    // 13 Lo borro
    // if ( !descriptio ) return res.status( 400 ).json( { error: 'Text property is required' } );

    // 15 Si llega un error
    if ( error ) return res.status(400).json({ error });
    

    const actio = await prisma.actio.create({
      // data: { descriptio } 
      // 16 Si todo ha ido bien tengo un createActioDto
      data: createActioDto! 
    });

    res.json( actio );
  };

  // 45 PM PUT Funciona en todos los casos (mandándole descriptio solamente, o fecha solamente, o las dos, o ninguna de las dos)

  public updateActio = async( req: Request, res: Response ) => {
    const id = +req.params.id;

    // 40 lo borro
    // if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );
    
    // 41
    const [error, updateActioDto] = UpdateActioDto.create({...req.body, id});

    // 42 Si llega el error
    if ( error ) return res.status(400).json({ error });
    
    const actio = await prisma.actio.findFirst({
      where: { id }
    });

    if ( !actio ) return res.status( 404 ).json( { error: `Actio with id ${ id } not found` } );
    
    // 43Ya no es necesario
    // const { descriptio, completumEst } = req.body;

    const updatedActio = await prisma.actio.update({
      where: { id },
      // data: { 
      //   descriptio, 
      //   completumEst: (completumEst) ? new Date(completumEst) : null
      // }
      // 44 Traigo la variable computada que ya tiene el objeto
      data: updateActioDto!.values
    });

    res.json( updatedActio );
  }


  public deleteActio = async(req:Request, res: Response) => {
    const id = +req.params.id;

    const actio = await prisma.actio.findFirst({
      where: { id }
    });

    if ( !actio ) return res.status(404).json({ error: `Actio with id ${ id } not found` });
    
    const deleted = await prisma.actio.delete({
      where: { id }
    });

    ( deleted )
      ? res.json( deleted )
      : res.status(400).json({ error: `Actio with id ${ id } not found`});
  }

}