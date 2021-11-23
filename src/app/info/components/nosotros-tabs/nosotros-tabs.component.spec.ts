import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosotrosTabsComponent } from './nosotros-tabs.component';

describe('NosotrosTabsComponent', () => {
  let component: NosotrosTabsComponent;
  let fixture: ComponentFixture<NosotrosTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosotrosTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NosotrosTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
