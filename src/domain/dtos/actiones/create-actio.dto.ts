export class CreateActioDto {

    private constructor(
        public readonly descriptio: string,
    ) {}

    static create( props: {[key:string]: any} ): [string?, CreateActioDto?] {

        const { descriptio } = props;

        if ( !descriptio ) return ['Descriptio property is required', undefined];

        return [undefined, new CreateActioDto(descriptio)];
    }

}