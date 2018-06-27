import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTrajetComponent } from './show-trajet.component';

describe('ShowTrajetComponent', () => {
  let component: ShowTrajetComponent;
  let fixture: ComponentFixture<ShowTrajetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowTrajetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTrajetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
