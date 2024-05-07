import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageProduct } from '../../../model/imageProduct';
import { Product } from '../../../model/product';
import { ProductService } from '../../../services/product.service';
import { GalleriaModule } from  'primeng/galleria';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-images-product',
  standalone: true,
  imports: [GalleriaModule, RadioButtonModule, FormsModule],
  templateUrl: './images-product.component.html',
  styleUrl: './images-product.component.scss'
})
export class ImagesProductComponent {
  images: any[] | undefined;
  images2: any[] | undefined;
  product: Product;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.images = [
      {img: 'https://primefaces.org/cdn/primeng/images/galleria/galleria3.jpg', img2: 'https://primefaces.org/cdn/primeng/images/galleria/galleria3s.jpg'},
      {img: 'https://primefaces.org/cdn/primeng/images/galleria/galleria2.jpg', img2: 'https://primefaces.org/cdn/primeng/images/galleria/galleria2s.jpg'},
      {img: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1.jpg', img2: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg'},
      {img: 'https://primefaces.org/cdn/primeng/images/galleria/galleria4.jpg', img2: 'https://primefaces.org/cdn/primeng/images/galleria/galleria4s.jpg'}
     ]
  }

  position: any = 'left';

}
