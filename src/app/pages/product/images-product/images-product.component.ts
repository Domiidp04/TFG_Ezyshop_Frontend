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
export class ImagesProductComponent{
  @Input() public images: any[] | undefined;
  public images2: any[] | undefined;
  public product: Product;
  public id: number;

  constructor( ) { }

  ngOnInit(): void {
  }

  position: any = 'left';

}
