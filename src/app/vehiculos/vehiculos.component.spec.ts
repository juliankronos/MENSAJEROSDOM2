import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VEHICULOSComponent } from './vehiculos.component';

describe('VEHICULOSComponent', () => {
  let component: VEHICULOSComponent;
  let fixture: ComponentFixture<VEHICULOSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VEHICULOSComponent]
    });
    fixture = TestBed.createComponent(VEHICULOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
