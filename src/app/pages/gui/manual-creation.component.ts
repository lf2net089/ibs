
import { Component } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manual-creation ',
  templateUrl: './manual-creation.component.html',
  styleUrls: ['./manual-creation.component.less'],
  standalone: true,
  imports: [AutoCompleteModule, CalendarModule, ButtonModule, SidebarModule,FormsModule ],
})
export class GUIManualCreation {
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

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
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
