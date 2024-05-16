import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorCategoryComponent } from './monitor-category.component';

describe('MonitorCategoryComponent', () => {
  let component: MonitorCategoryComponent;
  let fixture: ComponentFixture<MonitorCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonitorCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonitorCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
