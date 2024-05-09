import { Component, OnInit } from '@angular/core';
import { ImagesProductComponent } from './images-product/images-product.component';
import { BoardProductComponent } from './board-product/board-product.component';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../model/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ImagesProductComponent, BoardProductComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent implements OnInit {

  public product: Product;
  public id: number;
  public images: any | undefined;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getProduct(this.id);
  }

  private getProduct(id: number): void {
    this.productService.getProduct(id).subscribe((product: Product) => {
      this.product = product;
      this.getImages();
    });
  }
  private getImages(): void {
    this.images = this.product.imageProduct;
    console.log(this.images);
  }
}
