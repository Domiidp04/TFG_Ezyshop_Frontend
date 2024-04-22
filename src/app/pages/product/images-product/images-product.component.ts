import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageProduct } from '../../../model/imageProduct';
import { Product } from '../../../model/product';
import { ProductService } from '../../../services/product.service';
import { GalleriaModule } from  'primeng/galleria';

@Component({
  selector: 'app-images-product',
  standalone: true,
  imports: [GalleriaModule],
  templateUrl: './images-product.component.html',
  styleUrl: './images-product.component.scss'
})
export class ImagesProductComponent {
  images: any[] | undefined;
  product: Product;
  displayCustom: boolean | undefined;
  activeIndex: number = 0;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.loadProduct(id);
  }

  private loadProduct(id: number): void {
    this.productService.getProduct(id).subscribe({
      next: data => {
        this.product = data;
        this.loadImages();

      },
      error: error => {
        console.error('Error:', error);
      }
    });
  }

  responsiveOptions: any[] = [
    {
      breakpoint: '1500px',
      numVisible: 5
    },
    {
      breakpoint: '1024px',
      numVisible: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  imageClick(index: number) {
    this.activeIndex = index;
    this.displayCustom = true;
  }

  private loadImages(): void {
    this.images = this.product.imageProduct.map((image: ImageProduct) => image.imageUrl);
    console.log(this.images);

  }
}
