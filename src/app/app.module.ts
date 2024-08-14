import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { registerLocaleData } from '@angular/common';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgxPermissionsModule } from 'ngx-permissions';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import en from '@angular/common/locales/en';
import zh from '@angular/common/locales/zh';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BillingComponent } from './pages/invoice/invoice.component';
import { InvoiceComponent } from './pages/gui/gui.component';
import { CreditNoteComponent } from './pages/credit-note/credit-note.component';
import { ReceiptComponent } from './pages/receipt/receipt.component';
import { FinancialReportComponent } from './pages/financial-report/financial-report.component';
import { SystemMaintenanceComponent } from './pages/system-maintenance/system-maintenance.component';
import { DataMaintenanceComponent } from './pages/data-maintenance/data-maintenance.component';
import { QueryComponent } from './pages/query/query.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { PermissionsComponent } from './pages/permissions/permissions.component';
import { FormsModule } from '@angular/forms';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { ManualCreationModule } from './pages/gui/manual-creation.module';
registerLocaleData(en);
registerLocaleData(zh);

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    BillingComponent,
    InvoiceComponent,
    CreditNoteComponent,
    ReceiptComponent,
    FinancialReportComponent,
    SystemMaintenanceComponent,
    DataMaintenanceComponent,
    QueryComponent,
    SettingsComponent,
    PermissionsComponent
  ],
  imports: [
    AppComponent,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    NzButtonModule,
    NzMenuModule,
    NzLayoutModule,
    NzIconModule,
    NzBreadCrumbModule,
    BreadcrumbModule,
    MatGridListModule,
    AppRoutingModule,
    ManualCreationModule,
    NgxPermissionsModule.forRoot(),
    CalendarComponent
  ],
  providers: [],
})
export class AppModule {}
