import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCarritoComponent } from './product-carrito.component';

describe('ProductCarritoComponent', () => {
  let component: ProductCarritoComponent;
  let fixture: ComponentFixture<ProductCarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCarritoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
