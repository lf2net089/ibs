import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { menuItems, mainMenuItems } from './menu-config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, NzIconModule, NzLayoutModule, NzMenuModule, BreadcrumbModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  isCollapsed = false;
  items: any[] = [];
  mainMenuItems = mainMenuItems;
  subMenuItems = menuItems;

  breadcrumbStyle = {
    color: '#000',
    fontSize: '1rem'
  };

  constructor() {
    this.items = [];
  }

  ngOnInit() {
    this.items = [{ label: '首頁' }];
  }

  onMenuItemClick(item: any) {
    console.log('Menu item clicked:', item);
    this.updateBreadcrumb(item);
  }

  updateBreadcrumb(item: any) {
    this.items = [
      { label: '首頁', url: '/' },
      { label: item.title, url: item.url || '#' }
    ];
  }
}
