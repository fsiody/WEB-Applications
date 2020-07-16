export class Product {
    key: string | undefined;
    name: string;
    price: number;
    amount: number;
    photo: string;

    public constructor(init?:Partial<Product>) {
        Object.assign(this, init);
    }
}
