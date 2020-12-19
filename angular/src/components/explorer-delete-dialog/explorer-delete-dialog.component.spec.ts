import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorerDeleteDialogComponent } from './explorer-delete-dialog.component';

describe('ExplorerDeleteDialogComponent', () => {
  let component: ExplorerDeleteDialogComponent;
  let fixture: ComponentFixture<ExplorerDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplorerDeleteDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplorerDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
