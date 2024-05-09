import { Component, Input } from '@angular/core';
import { Product } from '../../../model/product';
import { CarritoService } from '../../../services/carrito.service';

@Component({
  selector: 'app-board-product',
  standalone: true,
  imports: [],
  templateUrl: './board-product.component.html',
  styleUrl: './board-product.component.scss'
})
export class BoardProductComponent {

  @Input() public product: Product;

  constructor(private carritoService: CarritoService) { }

  anadirACesta() {
    this.carritoService.anadirProducto(this.product);
  }

}
