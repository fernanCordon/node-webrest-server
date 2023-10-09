// 19 Creo archivo update-actio.dto.ts en dtos/actiones/

// 20 He copiado el otro dto y lo personalizo

// 21 Campio el nombre UpdateActioDto
export class UpdateActioDto {

    private constructor(
        // 31
        public readonly id: number,
        // 30 Lo pongo opcional
        public readonly descriptio?: string,
        // 29 Añado esto
        public readonly completumEst?: string,
    ) {}

    // 35 Propiedad computada. Objeto con las properties que quiero usar para insertar
    get values() {
        // 36 Objeto vacío
        const returnObj: {[key: string]: any} = {};

        // 37 LConstruyo el objeto con lo que me pasan. El id no lo paso para que no se pueda actualizar
        if ( this.descriptio ) returnObj.descriptio = this.descriptio;
        if ( this.completumEst ) returnObj.completumEst = this.completumEst;
    
        // 38
        return returnObj;
      }

    // 22 UpdateActioDto
    static create( props: {[key:string]: any} ): [string?, UpdateActioDto?] {

        // 23 Extraigo también completumEst 
        // const { descriptio, completumEst } = props;
        // 32 añado el id
        const { id, descriptio, completumEst } = props;

        // 26 
        let novumcompletumEst = completumEst;

        // 24 Lo borro porque si no viene descriptio no lo pondré
        // if ( !descriptio ) return ['Descriptio property is required', undefined];

        // 33 Validación
        if ( !id || isNaN( Number(id)) ) {
            return ['id must be a valid number'];
          }

        // 25 Si me llega la fecha creo una instancia de Date
        if ( completumEst ) {
            novumcompletumEst = new Date( completumEst)
            // 27 'Invalid Date' es el error que nos daría si la fecha no es correcta
            if ( novumcompletumEst.toString() === 'Invalid Date' ) {
                // 28 Llega el primer argumento del array con el error
                return ['CompletedAt must be a valid date', undefined]
            }
        }

        // 34 Cambio el return
        return [undefined, new UpdateActioDto(id, descriptio, novumcompletumEst)];
    }

}