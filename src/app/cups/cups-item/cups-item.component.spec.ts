import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CupsItemComponent } from './cups-item.component';

describe('CupsItemComponent', () => {
  let component: CupsItemComponent;
  let fixture: ComponentFixture<CupsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CupsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CupsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
