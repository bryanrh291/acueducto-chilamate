import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticaEditComponent } from './notica-edit.component';

describe('NoticaEditComponent', () => {
  let component: NoticaEditComponent;
  let fixture: ComponentFixture<NoticaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticaEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
