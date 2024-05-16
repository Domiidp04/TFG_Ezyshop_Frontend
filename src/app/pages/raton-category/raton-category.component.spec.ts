import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatonCategoryComponent } from './raton-category.component';

describe('RatonCategoryComponent', () => {
  let component: RatonCategoryComponent;
  let fixture: ComponentFixture<RatonCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatonCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RatonCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
