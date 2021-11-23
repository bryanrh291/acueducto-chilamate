import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosotrosJuntaComponent } from './nosotros-junta.component';

describe('NosotrosJuntaComponent', () => {
  let component: NosotrosJuntaComponent;
  let fixture: ComponentFixture<NosotrosJuntaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosotrosJuntaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NosotrosJuntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
