import { Component, OnInit } from '@angular/core';
import { ProductCategoriesComponent } from '../../components/product-categories/product-categories.component';
import { Product } from '../../model/product';
import { ProductService } from '../../services/product.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mas-vendidos',
  standalone: true,
  imports: [ProductCategoriesComponent, RouterLink],
  templateUrl: './mas-vendidos.component.html',
  styleUrl: './mas-vendidos.component.scss'
})
export class MasVendidosComponent implements OnInit{

  public products: Product[] = [];

  constructor(private productService: ProductService){ }

  ngOnInit(): void {
    this.loadProductsByTitle();
  }

  private loadProductsByTitle(){
    this.productService.getProductsByTitle("Product4").subscribe(
      (products)=>{
        this.products = products;
        console.log(this.products);
      }
    );

  }

}
