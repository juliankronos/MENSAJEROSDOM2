import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ASIGNACIONComponent } from './asignacion.component';

describe('ASIGNACIONComponent', () => {
  let component: ASIGNACIONComponent;
  let fixture: ComponentFixture<ASIGNACIONComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ASIGNACIONComponent]
    });
    fixture = TestBed.createComponent(ASIGNACIONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
