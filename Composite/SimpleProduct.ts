import { Product } from "./Product";
export class SimpleProduct extends Product {
	private id: Number;
	private name: String;
	private description: String;
	private lastMaintenance: Date;
	private price: Number;
	private idCategory: Number
	constructor(id, name, description, lastMaintenance, price, idCategory) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.lastMaintenance = lastMaintenance;
		this.price = price;
		this.idCategory = idCategory; 
	}

	public totalPrice() {
		return this.price;
	}
}