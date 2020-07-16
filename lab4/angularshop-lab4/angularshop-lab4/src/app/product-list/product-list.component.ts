import { Component, OnInit } from '@angular/core';
import { Product } from "../model/product";

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Array<Product>;

  constructor() {
    this.products = Array<Product>();
    // inicjalizacja obiektu i dodanie do listy
    let product = new Product();
    product.name = "IPhone 6s";
    product.price = 700;
    product.amount = 10;
    this.products.push(product);
    // albo tak
    this.products.push({ name: "Samung Galay S5", price: 1200, amount: 10 });
    this.products.push({ name: "Motorola Moto Z4", price: 899, amount: 10 });
    this.products.push({ name: "IPhone 8", price: 2566, amount: 10 });
    this.products.push({ name: "Samsung Galax S10", price: 3599, amount: 10 });
    this.products.push({ name: "Nokia 3", price: 199, amount: 10 });
    this.products.push({ name: "Huawei P20Lite", price: 399, amount: 10 });
    this.products.push({ name: "Xiaomi Mi 9", price: 459, amount: 10 });
    this.products.push({ name: "Xiaomi Redmi 7", price: 569, amount: 10 });
    this.products.push({ name: "Nokia 7.2", price: 1119, amount: 10 });
  }

  ngOnInit() {
  }
  
  public addProduct(product: Product) {
    product.amount++;
  }

  public removeProduct(product: Product) {
    if (product.amount >= 1) {
      product.amount--;
    }
  }

}


