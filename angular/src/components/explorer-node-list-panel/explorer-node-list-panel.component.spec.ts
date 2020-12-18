import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorerNodeListPanelComponent } from './explorer-node-list-panel.component';

describe('ExplorerNodeListPanelComponent', () => {
  let component: ExplorerNodeListPanelComponent;
  let fixture: ComponentFixture<ExplorerNodeListPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplorerNodeListPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplorerNodeListPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
