export class Pegi{
    constructor(
        public label: string,
        public related: Array<string>
    ){}
    public restricted(): boolean
    {
        console.log(this.label);
        return !isNaN(Number.parseInt(this.label));
    }
}