import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorerNavHeaderPanelComponent } from './explorer-nav-header-panel.component';

describe('ExplorerNavHeaderPanelComponent', () => {
  let component: ExplorerNavHeaderPanelComponent;
  let fixture: ComponentFixture<ExplorerNavHeaderPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplorerNavHeaderPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplorerNavHeaderPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
