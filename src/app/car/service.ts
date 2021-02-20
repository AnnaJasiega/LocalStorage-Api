export class Service {
    private name: string;
    private price: string;

    constructor(name, value){
        this.name = name;
        this.price = value;
    }

    public get $name(): string {
        return this.name;
    }
    public get $price(): string {
        return this.price;
    }
    public set $name(value: string) {
        this.name = value;
     }
    public set $price(value: string) {
        this.price = value;
    }
}
