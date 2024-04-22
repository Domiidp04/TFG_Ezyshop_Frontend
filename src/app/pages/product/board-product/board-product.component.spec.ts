import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardProductComponent } from './board-product.component';

describe('BoardProductComponent', () => {
  let component: BoardProductComponent;
  let fixture: ComponentFixture<BoardProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoardProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoardProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
