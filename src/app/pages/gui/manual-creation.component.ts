import { Component } from '@angular/core';
import { CurrencyPipe,CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-gui-manual-creation',
  templateUrl: './manual-creation.component.html',
  styleUrls: ['./manual-creation.component.less'],
  standalone: true,
  imports: [
    AutoCompleteModule,
    CalendarModule,
    ButtonModule,
    SidebarModule,
    FormsModule,
    TableModule,
    ToastModule,
    CommonModule
  ],
  providers: [MessageService,CurrencyPipe],
})
export class GUIManualCreationComponent {
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
  constructor(private messageService: MessageService) {}

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
        source: 'Auto',
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
        source: 'Manual',
        reportingStatus: 'Pending',
        taxCategory: 'Reduced',
        invoices: [],
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
    this.guiList.forEach((gui) => {
      this.expandedRows[gui.guiNumber] = true;
    });
  }
  collapseAll() {
    this.expandedRows = {};
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
    // Simulate filtering logic for sources
    this.filteredSources = this.getSources().filter(source =>
      source.name.toLowerCase().includes(query.toLowerCase())
    );
  }

  filterInvoiceNumber(event: any) {
    const query = event.query;
    // Simulate filtering logic for invoice numbers
    this.filteredInvoiceNumbers = this.getInvoiceNumbers().filter(invoice =>
      invoice.name.toLowerCase().includes(query.toLowerCase())
    );
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
}
