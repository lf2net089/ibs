import { Component } from '@angular/core';
import { CurrencyPipe, CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-gui-maintain',
  templateUrl: './gui-maintain.component.html',
  styleUrls: ['./gui-maintain.component.less'],
  standalone: true,
  imports: [
    AutoCompleteModule,
    CalendarModule,
    ButtonModule,
    SidebarModule,
    FormsModule,
    TableModule,
    ToastModule,
    CommonModule,
    TagModule
  ],
  providers: [MessageService, CurrencyPipe],
})
export class GUIMaintainComponent  {
  sidebarVisible: boolean = false;
  selectedCustomer: any;
  selectedServiceCenter: any;
  invoiceNumber: string = '';
  invoiceDateStart: Date = new Date();
  invoiceDateEnd: Date = new Date();
  source: string = '';
  filteredCustomers: any[] = [];
  filteredServiceCenters: any[] = [];
  filteredSources: any[] = [];
  filteredInvoiceNumbers: any[] = [];
  guiList: any[] = [];
  expandedRows: any = {};
  selectedGUI: any;
  expandedSubRows: { [key: string]: boolean } = {};
  selectedRow: any;
  selectedInvoice: any;
  selectedBill: any;
  issueType: any;
  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.guiList = [
      {
        guiNumber: 'GUI001',
        guiDate: '2024-08-01',
        customerId: 'CUST001',
        taxId: '12345678',
        serviceCenterCode: 'SCC001',
        salesAmount: 1000,
        taxAmount: 50,
        totalAmount: 1050,
        issueType: 'Auto',
        reportingStatus: 'Reported',
        taxCategory: 'Standard',
        invoices: [
          {
            invoiceNumber: 'INV001',
            invoiceDate: '2024-08-01',
            customerId: 'CUST001',
            taxId: '12345678',
            serviceCenterCode: 'SCC001',
            salesAmount: 500,
            taxAmount: 25,
            totalAmount: 525,
          },
          {
            invoiceNumber: 'INV002',
            invoiceDate: '2024-08-01',
            customerId: 'CUST001',
            taxId: '12345678',
            serviceCenterCode: 'SCC001',
            salesAmount: 500,
            taxAmount: 25,
            totalAmount: 525,
          },
        ],
        bills: [
          {
            billNumber: 'BL001',
            shippingDate: '2024-08-03',
            productCategory: 'Electronics',
            productName: 'Laptop',
            origin: 'Taipei',
            destination: 'New York',
            surcharge: 50,
            freight: 100,
            discount: 10,
            netAmount: 140,
          },
          {
            billNumber: 'BL002',
            shippingDate: '2024-08-03',
            productCategory: 'Electronics',
            productName: 'Smartphone',
            origin: 'Taipei',
            destination: 'Los Angeles',
            surcharge: 30,
            freight: 80,
            discount: 5,
            netAmount: 105,
          },
        ],
      },
      {
        guiNumber: 'GUI002',
        guiDate: '2024-08-02',
        customerId: 'CUST002',
        taxId: '87654321',
        serviceCenterCode: 'SCC002',
        salesAmount: 2000,
        taxAmount: 100,
        totalAmount: 2100,
        issueType: 'Manual',
        reportingStatus: 'Pending',
        taxCategory: 'Reduced',
        invoices: [],
        bills: [
          {
            billNumber: 'BL003',
            shippingDate: '2024-08-04',
            productCategory: 'Furniture',
            productName: 'Table',
            origin: 'Kaohsiung',
            destination: 'San Francisco',
            surcharge: 70,
            freight: 150,
            discount: 15,
            netAmount: 205,
          },
        ],
      },
    ];
  }

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }
  onRowExpand(event: any) {
    this.messageService.add({ severity: 'info', summary: 'Row Expanded', detail: 'GUI Number: ' + event.data.guiNumber });
  }
  onRowCollapse(event: any) {
    this.messageService.add({ severity: 'info', summary: 'Row Collapsed', detail: 'GUI Number: ' + event.data.guiNumber });
  }

  expandAll() {
    this.expandedRows = {};
    this.expandedSubRows = {};

    this.guiList.forEach(gui => {
      this.expandedRows[gui.guiNumber] = true;

      gui.invoices?.forEach((invoice: any) => {
        const invoiceKey = 'invoice-' + gui.guiNumber;
        this.expandedSubRows[invoiceKey] = true;
      });

      gui.bills?.forEach((bill: any) => {
        const billKey = 'bill-' + gui.guiNumber;
        this.expandedSubRows[billKey] = true;
      });
    });
  }


  collapseAll() {
    this.expandedRows = {};
    this.expandedSubRows = {};
  }



  toggleRow(rowKey: string) {
    if (this.expandedRows[rowKey]) {
      delete this.expandedRows[rowKey];
    } else {
      this.expandedRows[rowKey] = true;
    }
  }

  toggleSubRow(rowKey: string) {
    if (this.expandedSubRows[rowKey]) {
      delete this.expandedSubRows[rowKey];
    } else {
      this.expandedSubRows[rowKey] = true;
    }
  }

  isRowExpanded(rowKey: string): boolean {
    return !!this.expandedSubRows[rowKey];
  }

  filterCustomer(event: any) {
    const query = event.query;
    this.filteredCustomers = this.getCustomers().filter(customer =>
      customer.name.toLowerCase().includes(query.toLowerCase())
    );
  }

  filterServiceCenter(event: any) {
    const query = event.query;
    this.filteredServiceCenters = this.getServiceCenters().filter(center =>
      center.name.toLowerCase().includes(query.toLowerCase())
    );
  }

  filterSource(event: any) {
    const query = event.query;
    this.filteredSources = this.getSources().filter(source =>
      source.name.toLowerCase().includes(query.toLowerCase())
    );
  }

  filterInvoiceNumber(event: any) {
    const query = event.query;
    this.filteredInvoiceNumbers = this.getInvoiceNumbers().filter(invoice =>
      invoice.name.toLowerCase().includes(query.toLowerCase())
    );
  }

  getReportingStatusSeverity(status: string): "success" | "info" | "warning" | "danger" | "secondary" | undefined {
    switch (status) {
      case 'Reported':
        return 'success';
      case 'Pending':
        return 'warning';
      case 'Failed':
        return 'danger';
      case 'In Progress':
        return 'info';
      default:
        return 'secondary';  // default for any other status
    }
  }

  getCustomers() {
    return [
      { name: 'Customer 1' },
      { name: 'Customer 2' },
      { name: 'Customer 3' },
    ];
  }

  getServiceCenters() {
    return [
      { name: 'Service Center 1' },
      { name: 'Service Center 2' },
      { name: 'Service Center 3' },
    ];
  }

  getSources() {
    return [
      { name: '自動開立' },
      { name: '人工開立' },
      { name: 'POS' },
      { name: '綠界' },
    ];
  }

  getInvoiceNumbers() {
    return [
      { name: 'Invoice 1' },
      { name: 'Invoice 2' },
      { name: 'Invoice 3' },
    ];
  }

  onRowSelect(event: any) {
    console.log('Row selected', event.data);
  }

  onRowUnselect(event: any) {
    console.log('Row unselected', event.data);
  }

  onInvoiceSelect(event: any) {
    console.log('Invoice selected', event.data);
  }

  onInvoiceUnselect(event: any) {
    console.log('Invoice unselected', event.data);
  }

  onBillSelect(event: any) {
    console.log('Bill selected', event.data);
  }

  onBillUnselect(event: any) {
    console.log('Bill unselected', event.data);
  }

}
