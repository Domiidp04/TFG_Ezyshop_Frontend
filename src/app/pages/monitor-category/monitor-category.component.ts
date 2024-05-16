import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductCategoriesComponent } from '../../components/product-categories/product-categories.component';
import { Product } from '../../model/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-monitor-category',
  standalone: true,
  imports: [ProductCategoriesComponent, RouterLink],
  templateUrl: './monitor-category.component.html',
  styleUrl: './monitor-category.component.scss',
})
export class MonitorCategoryComponent {
  public products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProductsByTitle();
  }

  private loadProductsByTitle() {
    this.productService
      .getProductsByTitle('monitor')
      .subscribe((products) => {
        this.products = products;
        console.log(this.products);
        console.log(products.map((image) => image.imageProducts));
      });
  }
}
