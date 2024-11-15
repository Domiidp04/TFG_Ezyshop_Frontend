import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditProductsComponent } from './admin-edit-products.component';

describe('AdminEditProductsComponent', () => {
  let component: AdminEditProductsComponent;
  let fixture: ComponentFixture<AdminEditProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminEditProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminEditProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
