import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { SweetalertService } from '../services/sweetalert.service';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {
  constructor(
    private sweetaletService: SweetalertService,
    private productService: ProductService
  ) { }
  title = "Ürün Listesi";
  filterText = "";
  products: Product[];

  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      this.products = data
    });
  }
  
  addToCart(product) {
    this.sweetaletService.success(product.name + " sepete eklendi.")
  }
}
