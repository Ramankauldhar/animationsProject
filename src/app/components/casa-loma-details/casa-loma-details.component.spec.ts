import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasaLomaDetailsComponent } from './casa-loma-details.component';

describe('CasaLomaDetailsComponent', () => {
  let component: CasaLomaDetailsComponent;
  let fixture: ComponentFixture<CasaLomaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasaLomaDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasaLomaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
