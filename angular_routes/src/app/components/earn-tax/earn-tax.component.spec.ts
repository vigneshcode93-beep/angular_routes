import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarnTaxComponent } from './earn-tax.component';

describe('EarnTaxComponent', () => {
  let component: EarnTaxComponent;
  let fixture: ComponentFixture<EarnTaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EarnTaxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EarnTaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
