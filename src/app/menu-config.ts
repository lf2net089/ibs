import { MenuItem } from './menu-item.interface';
export const HOME_URL = '/home';

export const mainMenuItems: MenuItem[] = [
  { title: '首頁', url: '/home' },
  { title: '關於我們', url: '/about' },
  { title: '服務', url: '/services' },
  { title: '聯絡我們', url: '/contact' }
];

export const menuItems: MenuItem[] = [
  { title: '帳單',
    children: [
      {
        title: '收據',
        children: [
          { title: '維護收據', url: '/billing/receipt/maintenance' },
          { title: '手動開立收據', url: '/billing/receipt/manual' },
          { title: '作廢收據', url: '/billing/receipt/cancellation' }
        ]
      },
      { title: '重新產生帳單', url: '/' }
    ]
  },
  { title: '發票',
    children: [
      { title: '維護發票', url: '/' },
      { title: '手動開立發票', url: '/' },
      { title: '維護折讓單', url: '/' },
      { title: '維護專案退稅', url: '/' }
    ]
  },
  { title: '申報作業',
    children: [
      { title: '凍結作業', url: '/' },
      { title: '下載媒體申報檔', url: '/' },
      { title: '下載零稅率報表', url: '/' },
      { title: '下載專案退稅處理', url: '/' },
      { title: '維護進項資料', url: '/' }
    ]
  },
  {
    title: '維護',
    children: [
      { title: '系統維護', url: '/maintenance/system-maintenance' },
      { title: '資料維護', url: '/maintenance/data-maintenance' }
    ]
  },
  { title: '查詢',
    children: [
      { title: '綜合查詢', url: '/' },
    ]
  },
  { title: '設定',
    children: [
      { title: 'DHL基本設定', url: '/' },
      { title: '服務中心設定', url: '/' },
      { title: '發票配置設定', url: '/' },
      { title: '帳單群組列印設定', url: '/' },
      { title: '帳單模板維護', url: '/' },
      { title: '客戶主檔維護', url: '/' },
      { title: 'BLL Agent主檔維護', url: '/' },
      { title: '進項廠商主檔維護', url: '/' }
    ]
  },
  { title: '權限',
    children: [
      { title: '帳戶設定', url: '/permissions/account' },
      { title: '群組設定', url: '/permissions/group' },
      { title: '角色設定', url: '/permissions/role' },
      { title: '功能設定', url: '/permissions/feature' }
    ]
  }
];
