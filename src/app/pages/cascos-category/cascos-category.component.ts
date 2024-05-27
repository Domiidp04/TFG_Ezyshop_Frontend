import { Component } from '@angular/core';
import { ProductCategoriesComponent } from '../../components/product-categories/product-categories.component';
import { RouterLink } from '@angular/router';
import { Product } from '../../model/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-cascos-category',
  standalone: true,
  imports: [ProductCategoriesComponent, RouterLink],
  templateUrl: './cascos-category.component.html',
  styleUrl: './cascos-category.component.scss'
})
export class CascosCategoryComponent {

  public products: Product[] = [];

  constructor(private productService: ProductService){ }

  ngOnInit(): void {
    this.loadProductsByTitle();
  }

  private loadProductsByTitle(){
    this.productService.getProductsByTitle("Cascos").subscribe(
      (products)=>{
        this.products = products;
      }
    );

  }

}
