import { Component } from '@angular/core';
import { Product } from '../../model/product';
import { ProductService } from '../../services/product.service';
import { RouterLink } from '@angular/router';
import { ProductCategoriesComponent } from '../../components/product-categories/product-categories.component';

@Component({
  selector: 'app-raton-category',
  standalone: true,
  imports: [ProductCategoriesComponent, RouterLink],
  templateUrl: './raton-category.component.html',
  styleUrl: './raton-category.component.scss'
})
export class RatonCategoryComponent {

  public products: Product[] = [];

  constructor(private productService: ProductService){ }

  ngOnInit(): void {
    this.loadProductsByTitle();
  }

  private loadProductsByTitle(){
    this.productService.getProductsByTitle("Ratón").subscribe(
      (products)=>{
        this.products = products;
      }
    );

  }

}
