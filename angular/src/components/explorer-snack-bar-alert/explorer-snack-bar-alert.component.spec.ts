import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorerSnackBarAlertComponent } from './explorer-snack-bar-alert.component';

describe('ExplorerSnackBarAlertComponent', () => {
  let component: ExplorerSnackBarAlertComponent;
  let fixture: ComponentFixture<ExplorerSnackBarAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplorerSnackBarAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplorerSnackBarAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
