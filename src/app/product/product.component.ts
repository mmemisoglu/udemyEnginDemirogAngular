import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { SweetalertService } from '../services/sweetalert.service';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../category/category';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {
  constructor(
    private sweetaletService: SweetalertService,
    private productService: ProductService,
    private activatedRoute:ActivatedRoute
  ) { }
  title = "Ürün Listesi";
  filterText = "";
  products: Product[];

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.productService.getProducts(params["categoryId"]).subscribe(data => {
        this.products = data
      });
    })
   
  }
  
  addToCart(product) {
    this.sweetaletService.success(product.name + " sepete eklendi.")
  }
}
