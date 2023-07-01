import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AquiriumDetailsComponent } from './aquirium-details.component';

describe('AquiriumDetailsComponent', () => {
  let component: AquiriumDetailsComponent;
  let fixture: ComponentFixture<AquiriumDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AquiriumDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AquiriumDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
