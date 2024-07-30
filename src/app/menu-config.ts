import { MenuItem } from './menu-item.interface';
export const HOME_URL = '/home';

export const mainMenuItems: MenuItem[] = [
  { title: '首頁', url: '/home' },
  { title: '關於我們', url: '/about' },
  { title: '服務', url: '/services' },
  { title: '聯絡我們', url: '/contact' }
];

export const menuItems: MenuItem[] = [
  { title: '帳單', url: '/billing' },
  { title: '發票', url: '/invoice' },
  { title: '折讓單', url: '/credit-note' },
  { title: '收據', url: '/receipt' },
  { title: '財務申報', url: '/financial-report' },
  {
    title: '維護',
    children: [
      { title: '系統維護', url: '/system-maintenance' },
      { title: '資料維護', url: '/data-maintenance' }
    ]
  },
  { title: '查詢', url: '/search' },
  { title: '設定', url: '/settings' },
  { title: '權限', url: '/permissions' }
];
