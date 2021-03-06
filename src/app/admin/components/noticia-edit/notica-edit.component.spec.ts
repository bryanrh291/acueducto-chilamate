import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaEditComponent } from './noticia-edit.component';

describe('NoticaEditComponent', () => {
  let component: NoticiaEditComponent;
  let fixture: ComponentFixture<NoticiaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiaEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
