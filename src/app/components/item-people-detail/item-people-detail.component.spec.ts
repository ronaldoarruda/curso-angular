import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPeopleDetailComponent } from './item-people-detail.component';

describe('ItemPeopleDetailComponent', () => {
  let component: ItemPeopleDetailComponent;
  let fixture: ComponentFixture<ItemPeopleDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemPeopleDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemPeopleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
