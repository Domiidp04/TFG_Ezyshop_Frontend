import { Component, Input } from '@angular/core';
import { Product } from '../../model/product';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-product-carrito',
  standalone: true,
  imports: [],
  templateUrl: './product-carrito.component.html',
  styleUrl: './product-carrito.component.scss'
})
export class ProductCarritoComponent {

  @Input() product: Product;

  constructor(private carritoService: CarritoService){ }

  eliminarProducto() {
    this.carritoService.eliminarProducto(this.product);
  }


}
