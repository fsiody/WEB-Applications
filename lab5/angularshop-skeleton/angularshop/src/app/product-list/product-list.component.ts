import { Component, OnInit, Output } from '@angular/core';
import { Product } from "../model/product";

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Array<Product>;

  constructor() {
  }

  ngOnInit() {
    this.products = Array<Product>();
    this.products.push({ name: "Motorola Moto Z4", price: 899, amount: 10 });
    this.products.push({ name: "IPhone 8", price: 2566, amount: 8 });
  }

}


