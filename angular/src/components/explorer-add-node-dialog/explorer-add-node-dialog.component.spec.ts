import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorerAddNodeDialogComponent } from './explorer-add-node-dialog.component';

describe('ExplorerAddNodeDialogComponent', () => {
  let component: ExplorerAddNodeDialogComponent;
  let fixture: ComponentFixture<ExplorerAddNodeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplorerAddNodeDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplorerAddNodeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
