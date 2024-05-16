import { Component } from '@angular/core';
import { ProductCategoriesComponent } from '../../components/product-categories/product-categories.component';
import { RouterLink } from '@angular/router';
import { Product } from '../../model/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-pc-category',
  standalone: true,
  imports: [ProductCategoriesComponent, RouterLink],
  templateUrl: './pc-category.component.html',
  styleUrl: './pc-category.component.scss'
})
export class PcCategoryComponent {

  public products: Product[] = [];

  constructor(private productService: ProductService){ }

  ngOnInit(): void {
    this.loadProductsByTitle();
  }

  private loadProductsByTitle(){
    this.productService.getProductsByTitle("pc").subscribe(
      (products)=>{
        this.products = products;
        console.log(this.products);
        console.log(products.map((image) => image.imageProducts));

      }
    );

  }

}
