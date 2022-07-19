import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCarsDetailComponent } from './item-cars-detail.component';

describe('ItemCarsDetailComponent', () => {
  let component: ItemCarsDetailComponent;
  let fixture: ComponentFixture<ItemCarsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemCarsDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemCarsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
