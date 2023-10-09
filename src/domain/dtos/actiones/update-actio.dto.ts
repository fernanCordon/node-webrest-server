export class UpdateActioDto {

    private constructor(
        public readonly id: number,
        public readonly descriptio?: string,
        public readonly completumEst?: string,
    ) {}

    get values() {
        const returnObj: {[key: string]: any} = {};

        if ( this.descriptio ) returnObj.descriptio = this.descriptio;
        if ( this.completumEst ) returnObj.completumEst = this.completumEst;
    
        return returnObj;
      }

    static create( props: {[key:string]: any} ): [string?, UpdateActioDto?] {

        const { id, descriptio, completumEst } = props;

        let novumcompletumEst = completumEst;

        if ( !id || isNaN( Number(id)) ) {
            return ['id must be a valid number'];
          }

        if ( completumEst ) {
            novumcompletumEst = new Date( completumEst)
            if ( novumcompletumEst.toString() === 'Invalid Date' ) {
                return ['CompletedAt must be a valid date', undefined]
            }
        }

        return [undefined, new UpdateActioDto(id, descriptio, novumcompletumEst)];
    }

}