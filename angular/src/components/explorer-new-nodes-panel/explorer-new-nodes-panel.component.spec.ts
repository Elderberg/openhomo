import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorerNewNodesPanelComponent } from './explorer-new-nodes-panel.component';

describe('ExplorerNewNodesPanelComponent', () => {
  let component: ExplorerNewNodesPanelComponent;
  let fixture: ComponentFixture<ExplorerNewNodesPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplorerNewNodesPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplorerNewNodesPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
