import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private carrito = new BehaviorSubject(this.getCarritoInicial());
  carritoActual = this.carrito.asObservable();

  constructor() { }

  private getCarritoInicial() {
    const carritoGuardado = localStorage.getItem('carrito');
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
  }

  public anadirProducto(producto): void {
    const carritoActualizado = [...this.carrito.value, producto];
    this.carrito.next(carritoActualizado);
    localStorage.setItem('carrito', JSON.stringify(carritoActualizado));
  }

  public eliminarProducto(producto): void {
    const index = this.carrito.value.indexOf(producto);
    if (index > -1) {
      const carritoActualizado = [...this.carrito.value];
      carritoActualizado.splice(index, 1);
      this.carrito.next(carritoActualizado);
      localStorage.setItem('carrito', JSON.stringify(carritoActualizado));
    }
  }

}
