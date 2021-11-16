import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaTabsComponent } from './noticia-tabs.component';

describe('NoticiaTabsComponent', () => {
  let component: NoticiaTabsComponent;
  let fixture: ComponentFixture<NoticiaTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiaTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiaTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
