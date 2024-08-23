import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { CustomerMaintenanceSettingModule } from './customer-maintenance.component.module';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-customer-maintenance.',
  templateUrl: './customer-maintenance.component.html',
  styleUrls: ['./customer-maintenance.component.less'],
  standalone: true,
  imports: [CustomerMaintenanceSettingModule]
})
export class CustomerMaintenanceSettingComponent {
  showCustomerDialog: boolean = false;

  updateCustomer: any = {};
  selectedCustomer: any = null;

  oriServiceCenter: any = null;
  newServiceCenter: any = null;
  updateServiceCenters: any[] = [];
  selectedServiceCenters: any[] = [];

  constructor(private primengConfig: PrimeNGConfig, private cdr: ChangeDetectorRef) {
    this.criteriag = {
      customerId: '620893196',
      taxId: '84149126',
      flag1: false,
      flag2: false,
      flag3: false,
      flag4: false,
      flag5: false,
      flag6: false,
      flag7: false,
      flag8: false,
      flag9: false,
      flag10: false,
      flag11: false,
      flag12: false,
    };
  }

  frequencies: any[] = [
    {
      name: '月',
      value: 'M',
    },
    {
      name: '年',
      value: 'Y',
    },
  ];

  mergeIssueDate: any[] = [
    {
      name: '當天',
      value: 'D',
    },
    {
      name: '月底',
      value: 'DE',
    },
  ];

  mergeFrequencies: any[] = [
    {
      name: '當月合併',
      value: 'M',
    },
    {
      name: '當日合併',
      value: 'D',
    },
  ];

  /* TTT ? TXG ? */
  serviceCenters: any[] = [
    {
      name: '台北',
      code: 'TPE',
    },
    {
      name: '內湖',
      code: '內湖',
    },
    {
      name: '中和',
      code: '中和',
    },
    {
      name: '桃園',
      code: '桃園',
    },
    {
      name: '桃園機場',
      code: '桃園機場',
    },
    {
      name: '新竹',
      code: 'HCU',
    },
    {
      name: '台中',
      code: '台中',
    },
    {
      name: '台中青海',
      code: '台中青海',
    },
    {
      name: '嘉義',
      code: '嘉義',
    },
    {
      name: '台南',
      code: 'TNN',
    },
    {
      name: '高雄',
      code: 'KHH',
    },
  ];

  criteriag: {
    customerId: '620893196';
    taxId: '84149126';
    flag1: false;
    flag2: false;
    flag3: false;
    flag4: false;
    flag5: false;
    flag6: false;
    flag7: false;
    flag8: false;
    flag9: false;
    flag10: false;
    flag11: false;
    flag12: false;
  };

  customers: any[] = [
    {
      customerId: '620893196',
      taxId: '28431000',
      engName: 'APPLIED MATERIALS SOUTH EAST ASIA PTE LTD (TW)',
      name: '新加坡商應用材料股份有限公司台灣分公司 - AMSEA',
      address: '300 新竹市東區研發二路32號',
      engAddress: '70009 Tranistics Data Technologies J-2 2ND FLR BLOCK EP',
      contactName: '葉綠芬',
      engContactName: 'DEBASISH DAS',
      reference2: '',
      reference3: '',
      memo: '',
      // phone: "03-579-8888",
      email: 'customer_portal@amat.com',
      flag1: false,
      flag1_01: '',
      flag2: true,
      flag2_M: true,
      flag2_M_01: 'M',
      flag2_M_02: '25',
      flag2_M_03: '5',
      flag2_Y: false,
      flag2_Y_01: 'Y',
      flag2_Y_02: '21',
      flag2_Y_03: '15',
      flag3: true,
      flag4: true,
      flag5: true,
      flag5_list: [
        {
          oriServiceCenter: 'TNN',
          newServiceCenter: 'TPE',
        },
        {
          oriServiceCenter: 'TPE',
          newServiceCenter: 'KHH',
        },
      ],
      flag6: true,
      flag7: true,
      flag7_01: '1',
      flag7_02: 'M',
      flag7_03: 'false',
      flag7_03_list: [],
      flag8: true,
      flag9: true,
      flag9_01: 'TPP',
      flag10: true,
      flag11: true,
      flag12: true,
    },
    {
      customerId: '960928183',
      taxId: '86714857',
      engName: 'Wistron ITS',
      name: '緯創軟體股份有限公司',
      address: '22175新北市汐止區新台五路一段93號32樓',
      engAddress:
        '2F., No. 93, Sec. 1, Xintai 5th Rd., Xizhi Dist., New Taipei City 22175, Taiwan (R.O.C.)',
      contactName: '葉綠芬',
      engContactName: 'DEBASISH DAS',
      reference2: '',
      reference3: '',
      memo: 'QQQQQ',
      // phone: "02-7745-8888",
      email: 'info@wits.com',
      flag1: false,
      flag2: false,
      flag2_M: false,
      flag2_M_01: '',
      flag2_M_02: '',
      flag2_M_03: '',
      flag2_Y: false,
      flag2_Y_01: 'Y',
      flag2_Y_02: '24',
      flag2_Y_03: '2',

      flag3: false,
      flag4: false,
      flag5: false,
      flag5_list: [],
      flag6: false,
      flag7: false,
      flag7_01: '1',
      flag7_02: 'M',
      flag7_03: 'false',
      flag7_03_list: [],
      flag8: false,
      flag9: false,
      flag9_01: '',
      flag10: false,
      flag11: false,
    },
  ];

  openCustomerDialog($event: any) {
    console.log('openCustomerDialog', $event);
    this.showCustomerDialog = true;
    this.updateCustomer = $event.data;
  }

  saveCustomer() {
    console.log('saveCustomer');
  }

  hideCustomerDialog($event: any) {
    console.log('hideCustomerDialog', $event);
  }

  onTabOpen($event: any) {
    console.log('onTabOpen', $event);
  }

  onTabClose($event: any) {
    console.log('onTabClose', $event);
  }

  showFlag2($event: any) {
    console.log('showFlag2', $event);
  }

  addServiceCenter(event: any) {
    if (this.oriServiceCenter && this.newServiceCenter && this.oriServiceCenter !== this.newServiceCenter) {
      this.updateServiceCenters.push({
        source: this.oriServiceCenter,
        target: this.newServiceCenter
      });

      this.onServiceCenterSelectionChange();
      this.cdr.detectChanges();
    }
  }

  onServiceCenterSelectionChange() {
    this.selectedServiceCenters = [...this.selectedServiceCenters];
  }

  deleteSelecteServiceCenters() {
    if (!this.selectedServiceCenters) {
      return;
    }
    this.updateServiceCenters = this.updateServiceCenters.filter(
      (val) => this.selectedServiceCenters && !this.selectedServiceCenters.includes(val)
    );
    this.selectedServiceCenters = [];
  }

}
