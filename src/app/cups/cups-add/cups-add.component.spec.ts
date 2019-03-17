import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CupsAddComponent } from './cups-add.component';

describe('CupsAddComponent', () => {
  let component: CupsAddComponent;
  let fixture: ComponentFixture<CupsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CupsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CupsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
