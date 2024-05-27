import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcCategoryComponent } from './pc-category.component';

describe('PcCategoryComponent', () => {
  let component: PcCategoryComponent;
  let fixture: ComponentFixture<PcCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PcCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PcCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
