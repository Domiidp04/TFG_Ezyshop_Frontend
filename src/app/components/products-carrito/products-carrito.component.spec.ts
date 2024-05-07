import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsCarritoComponent } from './products-carrito.component';

describe('ProductsCarritoComponent', () => {
  let component: ProductsCarritoComponent;
  let fixture: ComponentFixture<ProductsCarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsCarritoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductsCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
