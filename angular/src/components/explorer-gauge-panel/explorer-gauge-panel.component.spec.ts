import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorerGaugePanelComponent } from './explorer-gauge-panel.component';

describe('ExplorerGaugePanelComponent', () => {
  let component: ExplorerGaugePanelComponent;
  let fixture: ComponentFixture<ExplorerGaugePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplorerGaugePanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplorerGaugePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
