import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosotrosEstructuraComponent } from './nosotros-estructura.component';

describe('NosotrosEstructuraComponent', () => {
  let component: NosotrosEstructuraComponent;
  let fixture: ComponentFixture<NosotrosEstructuraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosotrosEstructuraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NosotrosEstructuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
