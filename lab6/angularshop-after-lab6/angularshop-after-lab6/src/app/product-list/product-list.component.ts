import { Component, OnInit, Output } from '@angular/core';
import { Product } from "../model/product";
import { ProductsService } from "../services/products.service";
import { AuthService } from '../services/auth.service';

import { map } from 'rxjs/operators';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: any;
  selected: Product;
  operationMessage = null;

  constructor(private productService: ProductsService, private authService: AuthService) {
    this.selected = null;
  }

  ngOnInit() {
    this.productService.getProducts().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(products => {
      this.products = products;
    });
  }

  public deleteProduct(product: Product) {
    let deletePromise = this.productService.deleteProduct(product.key);
    let parent = this;

    deletePromise.then(function () {
      parent.selected = null;
      parent.operationMessage = "Produkt został usunięty.";
      setTimeout(function () {
        parent.operationMessage = null;
      }.bind(this), 2000);
    });
  }

  public productAdded() {
    this.selected = null;
  }

  public addProduct() {
    this.selected = new Product();
  }

  public select(product: Product) {
    if (product == this.selected) {
      this.selected = null;
    }
    else {
      this.selected = product;
    }
  }

}


