import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Product } from '../../model/product';
import { ProductService } from '../../services/product.service';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent implements OnInit {

  public product: Product;
  public id: number;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private carritoService: CarritoService
  ) {}

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.getProduct(this.id);

  }

  private getProduct(id: number): void {
    this.productService.getProduct(id).subscribe((product: Product) => {
      this.product = product;

    });
  }

  public anadirACesta() {
    this.carritoService.anadirProducto(this.product);
  }

}
