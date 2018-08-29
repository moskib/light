import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningSheetComponent } from './warning-sheet.component';

describe('WarningSheetComponent', () => {
  let component: WarningSheetComponent;
  let fixture: ComponentFixture<WarningSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarningSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
