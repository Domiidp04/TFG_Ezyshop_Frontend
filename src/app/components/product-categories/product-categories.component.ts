import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../model/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-categories',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-categories.component.html',
  styleUrl: './product-categories.component.scss'
})
export class ProductCategoriesComponent implements OnInit{

  @Input() public products: Product[];

  constructor(){ }

  ngOnInit(): void {
    console.log(this.products);
  }




}
