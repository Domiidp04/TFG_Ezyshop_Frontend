import { Component } from '@angular/core';
import { ImagesProductComponent } from './images-product/images-product.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ImagesProductComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

}
