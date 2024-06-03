import { Component, NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { TimelineModule } from 'primeng/timeline';
import { Product } from '../../../../model/product';
import { ProductService } from '../../../../services/product.service';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-admin-products',
  standalone: true,
  imports: [
    TableModule,
    RatingModule,
    TagModule,
    ButtonModule,
    CommonModule,
    TimelineModule,
    IconFieldModule,
    InputIconModule,
    RouterLink
  ],
  templateUrl: './admin-products.component.html',
  styleUrl: './admin-products.component.scss',
})
export class AdminProductsComponent {
  public products: Product[] = [];
  public first: number = 0;
  public rows: number = 10;
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getProducts();
  }

  private async getProducts(): Promise<void> {
    this.products = await this.productService.getProducts();
  }

  public next(): void {
    this.first = this.first + this.rows;
  }

  public prev() {
    this.first = this.first - this.rows;
  }

  public reset() {
    this.first = 0;
  }

  public pageChange(event) {
    this.first = event.first;
    this.rows = event.rows;
  }

  public isLastPage(): boolean {
    return this.products
      ? this.first === this.products.length - this.rows
      : true;
  }

  public isFirstPage(): boolean {
    return this.products ? this.first === 0 : true;
  }

  public getSeverity(stock: number) {
    if (stock == 0) {
      return 'danger';
    } else if (stock > 0 && stock <= 10) {
      return 'warning';
    } else if (stock > 10) {
      return 'success';
    }
    return null;
  }

  public getSeverityDisabled(disabled: boolean) {
    switch (disabled) {
      case false:
        return 'success';
      case true:
        return 'danger';
    }
  }

  public async deleteProduct(productId: number){
    await this.productService.deleteProduct(productId);
    this.getProducts();
  }
}
