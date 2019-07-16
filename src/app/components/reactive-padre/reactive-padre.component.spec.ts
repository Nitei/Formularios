import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivePadreComponent } from './reactive-padre.component';

describe('ReactivePadreComponent', () => {
  let component: ReactivePadreComponent;
  let fixture: ComponentFixture<ReactivePadreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactivePadreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactivePadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
