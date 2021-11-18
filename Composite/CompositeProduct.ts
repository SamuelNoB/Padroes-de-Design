import { Product } from "./Product";
export class CompositeProduct extends Product {
    products: Product[] = [];

    id: Number;
    name: String;
    constructor(id, name) {
        super();
        this.id = id;
        this.name = name;
    }
    getChild(i) { return this.products[i]; }

    public add(child) {
        this.products.push(child);
    }

    public remove(child) {
    for (let product, i = 0; product = this.getChild(i); i++) {
        if (product === child) {
            this.products.splice(i, 1);
            return true;
        }
    }
        return false;
    }

    totalPrice() {
        let result = 0;
        for (let product, i = 0; product = this.getChild(i); i++) {
            result += product.totalPrice();
        }

        return result;
    }
    discountPrice(percentage: any): Number {
        
        if (percentage > 1 && percentage < 0) {   
            throw new Error("percentage value must be between 0 and 1") 
        }
        const total: any = this.totalPrice();
        const discount = total* percentage;
        return total - discount;
    }
}