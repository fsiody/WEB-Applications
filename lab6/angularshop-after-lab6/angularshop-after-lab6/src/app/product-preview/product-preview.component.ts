import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Product } from "../model/product";
import { ProductsService } from "../services/products.service";
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.css']
})
export class ProductPreviewComponent implements OnChanges {

  @Input() product: Product
  editedProduct: Product = new Product();
  @Output() deleteProductClicked = new EventEmitter<Product>();
  @Output() productAdded = new EventEmitter<Product>();
  showSavingSuccessInfo = false;
  showSavingErrorInfo = false;
  dirty = false;

  constructor(private productService: ProductsService, private authService: AuthService) {
  }

  ngOnChanges(): void {
    this.dirty = false;
    if (this.product != null) {
      this.editedProduct = Object.assign({}, this.product);
    }
  }

  public deleteProduct() {
    this.deleteProductClicked.emit(this.product);
  }

  public makeDirty() {
    this.dirty = true;
  }

  public saveProduct(newProduct: boolean) {
    let savePromise = this.productService.saveProduct(this.editedProduct);
    let component = this;

    savePromise.then(function () {
      component.showSavingSuccessInfo = true;
      component.dirty = false;
      setTimeout(function () {
        component.showSavingSuccessInfo = false;
        if (newProduct) {
          component.productAdded.emit(component.editedProduct);
        }
      }.bind(this), 2000);
    });
    savePromise.catch(function (err) {
      console.log("error: " + err);
      component.showSavingErrorInfo = true;
      setTimeout(function () {
        component.showSavingErrorInfo = false;
      }.bind(this), 2000);
    });
  }
}
