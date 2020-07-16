import { Injectable } from '@angular/core';
import { Product } from "../model/product";
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private dbPath = '/products';
  productsRef: AngularFirestoreCollection<Product> = null;

  constructor(private db: AngularFirestore) {
    this.productsRef = db.collection(this.dbPath);
    // this.initDb(); 
  }

  // This is for fast data initialization. Uncomment function execution in the constructor
  initDb() {
    this.saveProduct(new Product({ name: "Motorola Moto Z4", price: 899, amount: 10, photo: "https://ss7.vzw.com/is/image/VerizonWireless/motorola-moto-z4-black?$png8alpha256$&hei=520" }));
    this.saveProduct(new Product({ name: "IPhone 8", price: 2566, amount: 8, photo: "https://ss7.vzw.com/is/image/VerizonWireless/iPhone8-Svr?$png8alpha256$&hei=520" }));
    this.saveProduct(new Product({ name: "Samsung Galaxy S10", price: 3599, amount: 4, photo: "https://ss7.vzw.com/is/image/VerizonWireless/SamsungGalaxyS10_Blue?$png8alpha256$&hei=520" }));
    this.saveProduct(new Product({ name: "Nokia 3", price: 199, amount: 15, photo: "https://ss7.vzw.com/is/image/VerizonWireless/nokia2-1-v?$device-lg$&wid=256&hei=520" }));
    this.saveProduct(new Product({ name: "Nokia 7.1", price: 1119, amount: 6, photo: "https://ss7.vzw.com/is/image/VerizonWireless/nokia-7-1-crystal-midnight-blue?$device-lg$&wid=256&hei=520" }));
    this.saveProduct(new Product({ name: "Google Pixel 3a", price: 2139, amount: 1, photo: "https://ss7.vzw.com/is/image/VerizonWireless/google-pixel-3a-just-black?$png8alpha256$&hei=520" }));
  }

  getProducts(): AngularFirestoreCollection<Product> {
    return this.productsRef;
  }

  saveProduct(product): Promise<any> {
    if (product.key != null) {
      return this.productsRef.doc(product.key).update(product);
    } else {
      return this.productsRef.add(product);
    }
  }

  deleteProduct(key: string): Promise<void> {
    return this.productsRef.doc(key).delete();
  }

}