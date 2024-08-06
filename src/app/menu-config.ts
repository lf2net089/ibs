import { MenuItem } from './menu-item.interface';
export const homeItem: MenuItem = { title: '首頁', url: '/home' };

export const mainMenuItems: MenuItem[] = [
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
          { title: '手動開立收據', url: '/billing/receipt/manual-creation' },
          { title: '作廢收據', url: '/billing/receipt/cancellation' }
        ]
      },
      { title: '重新產生帳單', url: '/billing/regenerate-bill' }
    ]
  },
  { title: '發票',
    children: [
      { title: '維護發票', url: '/invoice/maintenance' },
      { title: '手動開立發票', url: '/invoice/manual-creation' },
      { title: '維護折讓單', url: '/invoice/credit-note/maintenance' },
      { title: '維護專案退稅', url: '/invoice/project-tax/maintenance' }
    ]
  },
  { title: '申報作業',
    children: [
      { title: '凍結作業', url: '/report/freeze-operation' },
      { title: '下載媒體申報檔', url: '/report/media-declaration' },
      { title: '下載零稅率報表', url: '/report/zero-tax-report' },
      { title: '下載專案退稅處理', url: '/report/project-tax-report' },
      { title: '維護進項資料', url: '/report/input-maintenance' }
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
      { title: '綜合查詢', url: '/search/summary' }
    ]
  },
  { title: '設定',
    children: [
      { title: 'DHL基本設定', url: '/settings/basic' },
      { title: '服務中心設定', url: '/settings/service-center' },
      { title: '發票配置設定', url: '/settings/invoice-configuration' },
      { title: '帳單群組列印設定', url: '/settings/bill-group-print' },
      { title: '帳單模板維護', url: '/settings/bill-template-maintenance' },
      { title: '客戶主檔維護', url: '/settings/customer-maintenance' },
      { title: 'BLL Agent主檔維護', url: '/settings/agent-maintenance' },
      { title: '進項廠商主檔維護', url: '/settings/vendor-maintenance' }
    ]
  },
  { title: '權限',
    children: [
      { title: '帳戶設定', url: '/permissions/account-settings' },
      { title: '群組設定', url: '/permissions/group-settings' },
      { title: '角色設定', url: '/permissions/role-settings' },
      { title: '功能設定', url: '/permissions/feature-settings' }
    ]
  }
];
