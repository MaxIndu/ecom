import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public product:Product;

  constructor() { }

  ngOnInit() {
    this.product = new Product('T-Shirt', 12.55, 'https://cdn.shopify.com/s/files/1/0668/2853/products/LittleMan-Tshirt-2_1.jpg?v=1531522189', true);
  }

  addToCart(event){
    console.log('Adding to cart');

  }

}
