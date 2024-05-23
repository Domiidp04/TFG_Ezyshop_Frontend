import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { ProductService } from '../../services/product.service';
import { RouterLink } from '@angular/router';
import { ProductCategoriesComponent } from '../../components/product-categories/product-categories.component';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [RouterLink, ProductCategoriesComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent implements OnInit{

  public products: Product[];

  constructor(private productService: ProductService){ }

  ngOnInit(): void {
    this.loadProducts();
  }

  private loadProducts(){
    this.productService.getProductsDesc().subscribe(
      (rest) => {
        this.products = rest;
      }
    )
  }

}
