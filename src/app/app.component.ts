import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { mainMenuItems, menuItems } from './menu-config';

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
  selectedParentMenuItem: any = null;
  selectedSubMenuItem: any = null;

  breadcrumbStyle = {
    color: '#000',
    fontSize: '1rem'
  };

  constructor(private router: Router) {
    this.items = [];
  }

  ngOnInit() {
    this.items = [];
  }

  onMenuItemClick(item: any, parentItem?: any) {
    if (parentItem) {
      this.selectedParentMenuItem = parentItem;
      this.selectedSubMenuItem = item;
      this.updateBreadcrumb(item, parentItem);
      this.router.navigate([item.url]);
    } else {
      this.selectedParentMenuItem = item;
      this.selectedSubMenuItem = null;
      this.updateBreadcrumb(item);
      this.router.navigate([item.url]);
    }
  }

  updateBreadcrumb(item: any, parentItem?: any) {
    this.items = [];

    if (parentItem) {
      this.items.push({ label: parentItem.title, url: parentItem.url || '#' });
    }

    this.items.push({ label: item.title, url: item.url || '#' });
  }

  isParentMenuSelected(item: any): boolean {
    return this.selectedParentMenuItem && this.selectedParentMenuItem.title === item.title;
  }

  isSubMenuSelected(item: any): boolean {
    return this.selectedSubMenuItem && this.selectedSubMenuItem.title === item.title;
  }
}
