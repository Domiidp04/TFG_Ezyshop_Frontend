import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CascosCategoryComponent } from './cascos-category.component';

describe('CascosCategoryComponent', () => {
  let component: CascosCategoryComponent;
  let fixture: ComponentFixture<CascosCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CascosCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CascosCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
