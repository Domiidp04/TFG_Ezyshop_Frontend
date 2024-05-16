import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortatilCategoryComponent } from './portatil-category.component';

describe('PortatilCategoryComponent', () => {
  let component: PortatilCategoryComponent;
  let fixture: ComponentFixture<PortatilCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortatilCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortatilCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
