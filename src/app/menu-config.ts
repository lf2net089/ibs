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
      { title: '帳單維護', url: '/invoice/search-invoice' },
      {
        title: '收據',
        children: [
          { title: '收據維護', url: '/invoice/receipt/maintenance' },
          { title: '手動開立收據', url: '/invoice/receipt/manual-creation' },
        ]
      }
    ]
  },
  { title: '發票',
    children: [
      { title: '發票維護', url: '/gui/maintenance' },
      { title: '手動開立發票', url: '/gui/manual-creation' },
      { title: '折讓單維護', url: '/gui/creditnote/maintenance' },
      { title: '專案退稅維護', url: '/gui/projecttax/maintenance' }
    ]
  },
  { title: '設定',
    children: [
      { title: '發票字軌與號碼設定', url: '/settings/gui-configuration' },
      { title: '客戶主檔設定', url: '/settings/customer-maintenance' },
      { title: '帳單模板設定', url: '/settings/invoice-template-maintenance' },
      { title: '服務中心設定', url: '/settings/service-center' },
      { title: 'BLL Agent客戶關聯檔維護', url: '/settings/agent-maintenance' },
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
      { title: '進項資料維護', url: '/report/input-maintenance' },
      { title: '營業稅進銷項及折讓單申報檔下載', url: '/report/media-declaration' },
      { title: '零稅率申報檔下載', url: '/report/zero-tax-report' },
      { title: '專案退稅申報檔下載', url: '/report/project-tax-report' },
    ]
  }
];
