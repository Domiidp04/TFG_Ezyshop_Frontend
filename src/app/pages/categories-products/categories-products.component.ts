import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductCategoriesComponent } from '../../components/product-categories/product-categories.component';
import { Product } from '../../model/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-categories-products',
  standalone: true,
  imports: [RouterLink, ProductCategoriesComponent],
  templateUrl: './categories-products.component.html',
  styleUrl: './categories-products.component.scss'
})
export class CategoriesProductsComponent implements OnInit {

  public products: Product[];

  constructor(private productService: ProductService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  private loadProducts(): void{
    const categoryId = parseInt(this.route.snapshot.paramMap.get('categoryId'));
    console.log(categoryId);

    this.productService.getProductsByCategoryId(categoryId).subscribe(
      (products: Product[]) => {
        this.products = products;
      }
    )
  }



}
