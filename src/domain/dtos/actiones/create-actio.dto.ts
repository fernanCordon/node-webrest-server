// 1 EXPL - DTO (Data Transfer Object) Son objetos hechos para transferir información. En ellos pongo toda la información que necesito para poder crear la información.
// Sirve para validar la información que llega a la db

// 2 Como los dtos son reglas los pondré en la carpeta de dominio
// Creo carpeta src/domain/ 
// Creo carpeta src/domain/dtos/ 
// Creo carpeta src/domain/dtos/actiones/ 
// Creo archivo create-actio.dto.ts en actiones/

// 3 Dto para crear Actio (es una clase)
export class CreateActioDto {

    //4 Cuando haga una instancia recibiré una descriptio. Constructor privado que solo lo podré llamar dentro de esta clase
    private constructor(
        public readonly descriptio: string,
    ) {}

    // 5 Método estático que recibe las properties. Éstas son objeto que va a simular el objeto que vamos a recibir en req.body del método createActio del controlador.
    // Va ha devolver un arreglo con dos elementos opcionales. En primer lugar hay un string para saber, por si sale mal, que es lo que salio mal, y, en segundo lugar, una instancia de CreateActioDto para cuando salga todo bien
    static create( props: {[key:string]: any} ): [string?, CreateActioDto?] {

        // 7 Extraigo descriptio para hacer su validación
        const { descriptio } = props;
        // 8 Si no viene Devuelvo el array con un string en primera posición
        if ( !descriptio ) return ['Descriptio property is required', undefined];

        // 6
        // return [];
        // 9 En caso de que lo tengamos el valor llega en el segundo lugar del array
        return [undefined, new CreateActioDto(descriptio)];
    }

}