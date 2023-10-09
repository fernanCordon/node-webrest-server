import { Request, Response } from 'express';
import { prisma } from '../../data/postgres/index';
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


  public createActio = async ( req: Request, res: Response ) => {

    const [error, createActioDto] = CreateActioDto.create(req.body)

    if ( error ) return res.status(400).json({ error });

    const actio = await prisma.actio.create({
      data: createActioDto! 
    });

    res.json( actio );
  };


  public updateActio = async( req: Request, res: Response ) => {
    const id = +req.params.id;

    const [error, updateActioDto] = UpdateActioDto.create({...req.body, id});

    if ( error ) return res.status(400).json({ error });
    
    const actio = await prisma.actio.findFirst({
      where: { id }
    });

    if ( !actio ) return res.status( 404 ).json( { error: `Actio with id ${ id } not found` } );

    const updatedActio = await prisma.actio.update({
      where: { id },
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