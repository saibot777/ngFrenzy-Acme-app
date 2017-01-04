import { Component } from '@angular/core';

import { IProduct } from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

  pageTitle: string = 'Product Detail';
  product: IProduct;

}
