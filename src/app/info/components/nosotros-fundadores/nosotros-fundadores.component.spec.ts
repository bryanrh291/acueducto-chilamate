import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosotrosFundadoresComponent } from './nosotros-fundadores.component';

describe('NosotrosFundadoresComponent', () => {
  let component: NosotrosFundadoresComponent;
  let fixture: ComponentFixture<NosotrosFundadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosotrosFundadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NosotrosFundadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
