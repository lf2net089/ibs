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
      { title: '帳單查詢', url: '/invoice/search-invoice' },
      {
        title: '收據',
        children: [
          { title: '維護收據', url: '/invoice/receipt/maintenance' },
          { title: '手動開立收據', url: '/invoice/receipt/manual-creation' },
          { title: '作廢收據', url: '/invoice/receipt/cancellation' }
        ]
      }
    ]
  },
  { title: '發票',
    children: [
      { title: '發票維護', url: '/gui/maintenance' },
      { title: '手動開立發票', url: '/gui/manual-creation' },
      { title: '維護折讓單', url: '/gui/creditnote/maintenance' },
      { title: '維護專案退稅', url: '/gui/projecttax/maintenance' }
    ]
  },
  { title: '設定',
    children: [
      { title: '服務中心設定', url: '/settings/service-center' },
      { title: '發票配置設定', url: '/settings/gui-configuration' },
      { title: '帳單群組列印設定', url: '/settings/invoice-group-print' },
      { title: '帳單模板維護', url: '/settings/invoice-template-maintenance' },
      { title: '客戶主檔維護', url: '/settings/customer-maintenance' },
      { title: 'BLL Agent客戶關聯檔維護', url: '/settings/agent-maintenance' },
      { title: '進項廠商名單維護', url: '/settings/vendor-maintenance' }
    ]
  },
  { title: '權限',
    children: [
      { title: '帳戶設定', url: '/permissions/account-settings' },
      { title: '群組設定', url: '/permissions/group-settings' },
      { title: '角色設定', url: '/permissions/role-settings' },
      { title: '功能設定', url: '/permissions/feature-settings' }
    ]
  },
  { title: '申報',
    children: [
      { title: '凍結作業', url: '/report/freeze-operation' },
      { title: '下載媒體申報檔', url: '/report/media-declaration' },
      { title: '下載零稅率報表', url: '/report/zero-tax-report' },
      { title: '下載專案退稅處理', url: '/report/project-tax-report' },
      { title: '維護進項資料', url: '/report/input-maintenance' }
    ]
  }
];
