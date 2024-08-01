import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursiveItemComponent } from './recursive-item.component';

describe('RecursiveItemComponent', () => {
  let component: RecursiveItemComponent;
  let fixture: ComponentFixture<RecursiveItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecursiveItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecursiveItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
