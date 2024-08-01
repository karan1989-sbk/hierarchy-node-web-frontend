import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OaeFilterComponent } from './oae-filter.component';

describe('OaeFilterComponent', () => {
  let component: OaeFilterComponent;
  let fixture: ComponentFixture<OaeFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OaeFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OaeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
