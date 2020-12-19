import { Component, OnInit, Input } from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';

@Component({
  selector: 'nav-header-panel',
  templateUrl: './explorer-nav-header-panel.component.html',
  styleUrls: ['./explorer-nav-header-panel.component.scss']
})
export class ExplorerNavHeaderPanelComponent implements OnInit {
  @Input() drawer: MatDrawer;

  constructor() { }

  ngOnInit(): void {
  }

}
