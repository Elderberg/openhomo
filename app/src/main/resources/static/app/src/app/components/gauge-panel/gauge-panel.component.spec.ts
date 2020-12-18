import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaugePanelComponent } from './gauge-panel.component';

describe('GaugePanelComponent', () => {
  let component: GaugePanelComponent;
  let fixture: ComponentFixture<GaugePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaugePanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GaugePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
