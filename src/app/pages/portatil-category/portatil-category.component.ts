import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductCategoriesComponent } from '../../components/product-categories/product-categories.component';
import { Product } from '../../model/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-portatil-category',
  standalone: true,
  imports: [ProductCategoriesComponent, RouterLink],
  templateUrl: './portatil-category.component.html',
  styleUrl: './portatil-category.component.scss'
})
export class PortatilCategoryComponent {

  public products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProductsByTitle();
  }

  private loadProductsByTitle() {
    this.productService
      .getProductsByTitle('portátil')
      .subscribe((products) => {
        this.products = products;
      });
  }

}
