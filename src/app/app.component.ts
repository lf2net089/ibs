import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { BreadcrumbModule } from 'primeng/breadcrumb';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, NzIconModule, NzLayoutModule, NzMenuModule, BreadcrumbModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  isCollapsed = false;
  items: any[] = [];

  constructor() {
    this.items = [];
  }

  ngOnInit() {
    this.items = [
      { label: 'Home', url: 'home' },
      { label: 'List', url: 'list' },
      { label: 'App', url: 'app' }
    ];
  }
}
