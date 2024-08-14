import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet, NavigationEnd } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { Title } from '@angular/platform-browser';
import { mainMenuItems, menuItems, homeItem } from './menu-config';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, NzIconModule, NzLayoutModule, NzMenuModule, BreadcrumbModule],
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

  constructor(private router: Router, private titleService: Title) {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      this.updateBreadcrumbFromUrl();
    });
  }

  ngOnInit() {
    this.updateBreadcrumbFromUrl();
  }

  updateBreadcrumbFromUrl() {
    const urlSegments = this.router.url.split('/').filter(segment => segment);
    this.items = [];
    this.items.push({ label: homeItem.title, url: homeItem.url });
    this.titleService.setTitle(homeItem.title);

    if (urlSegments.length === 0) {
      return;
    }

    let currentUrl = '';
    urlSegments.forEach(segment => {
      currentUrl += `/${segment}`;
      const menuItem = this.findMenuItemByUrl(currentUrl);

      if (menuItem) {
        if (menuItem.parent && menuItem.parent.url !== homeItem.url) {
          this.items.push({ label: menuItem.parent.title, url: menuItem.parent.url });
        }
        if (menuItem.url !== '/' && menuItem.title !== homeItem.title) {
          this.items.push({ label: menuItem.title, url: menuItem.url || '#' });
          this.titleService.setTitle(menuItem.title);
        }
      }
    });
  }

  onMenuItemClick(item: any, parentItem?: any) {
    if (parentItem) {
      this.selectedParentMenuItem = parentItem;
      this.selectedSubMenuItem = item;
    } else {
      this.selectedParentMenuItem = item;
      this.selectedSubMenuItem = null;
    }
    this.router.navigate([item.url]).then(() => {
      this.updateBreadcrumbFromUrl();
    });
  }

  findMenuItemByUrl(url: string, parent: any = null) {
    let menuItem = this.mainMenuItems.find(item => item.url === url);
    if (menuItem) {
      return { ...menuItem, parent };
    }

    for (const parentItem of this.subMenuItems) {
      if (parentItem.children) {
        for (const childItem of parentItem.children) {
          if (childItem.children) {
            menuItem = childItem.children.find(child => child.url === url);
            if (menuItem) {
              return { ...menuItem, parent: childItem };
            }
          } else if (childItem.url === url) {
            return { ...childItem, parent: parentItem };
          }
        }
      } else if (parentItem.url === url) {
        return { ...parentItem, parent };
      }
    }

    return null;
  }

  isParentMenuSelected(item: any): boolean {
    return this.selectedParentMenuItem && this.selectedParentMenuItem.title === item.title;
  }

  isSubMenuSelected(item: any): boolean {
    return this.selectedSubMenuItem && this.selectedSubMenuItem.title === item.title;
  }
}
