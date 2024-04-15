import { Component } from '@angular/core';
import { Product } from '../../model/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  product: Product

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) { }


  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const productTitle = params['title'];
      this.productService.getProduct(productTitle).subscribe(
        (product: Product) => {
          this.product = product;
        },
        (error: any) => {
          console.error('Error fetching product', error);
        }
      );
    });
  }

}
