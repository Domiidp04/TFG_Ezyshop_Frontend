import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent implements OnInit{

  public products: Product[];

  constructor(private productService: ProductService){ }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (rest) => {
        this.products = rest;
      }
    )
  }



}
