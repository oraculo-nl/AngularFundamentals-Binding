import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RekenmachineComponent } from './rekenmachine.component';

describe('RekenmachineComponent', () => {
  let component: RekenmachineComponent;
  let fixture: ComponentFixture<RekenmachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RekenmachineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RekenmachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
