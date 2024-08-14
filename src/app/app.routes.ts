import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';
import { InvoiceComponent } from './pages/invoice/invoice.component';
import { GUIComponent } from './pages/gui/gui.component';
import { GUIManualCreation } from './pages/gui/manual-creation.component';
import { CreditNoteComponent } from './pages/credit-note/credit-note.component';
import { ReceiptMaintenanceComponent } from './pages/receipt/receipt-maintenance.component';
import { ReceiptManualCreationComponent } from './pages/receipt/receipt-manual-creation.component';
import { ReceiptCancellationComponent } from './pages/receipt/receipt-cancellation.component';
import { FinancialReportComponent } from './pages/financial-report/financial-report.component';
import { SystemMaintenanceComponent } from './pages/system-maintenance/system-maintenance.component';
import { DataMaintenanceComponent } from './pages/data-maintenance/data-maintenance.component';
import { QueryComponent } from './pages/query/query.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { PermissionsComponent } from './pages/permissions/permissions.component';
import { HomeComponent } from './pages/home/home.component';
import { AccountSettingsComponent } from './pages/permissions/account-settings.component';
import { GroupSettingsComponent } from './pages/permissions/group-settings.component';
import { RoleSettingsComponent } from './pages/permissions/role-settings.component';
import { FeatureSettingsComponent } from './pages/permissions/feature-settings.component';
import { CalendarComponent } from './pages/calendar/calendar.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'invoice/search-invoice', component: InvoiceComponent },
  { path: 'invoice/regenerate-invoice', component: InvoiceComponent },
  {
    path: 'invoice/receipt/maintenance',
    component: ReceiptMaintenanceComponent,
  },
  {
    path: 'invoice/receipt/manual-creation',
    component: ReceiptManualCreationComponent,
  },
  {
    path: 'invoice/receipt/cancellation',
    component: ReceiptCancellationComponent,
  },
  { path: 'gui/maintenance', component: GUIComponent },
  { path: 'gui/manual-creation', component: GUIManualCreation },
  { path: 'gui/creditnote/maintenance', component: CreditNoteComponent },
  {
    path: 'gui/projecttax/maintenance',
    component: FinancialReportComponent,
  },
  { path: 'report/freeze-operation', component: FinancialReportComponent },
  { path: 'report/media-declaration', component: FinancialReportComponent },
  { path: 'report/zero-tax-report', component: FinancialReportComponent },
  { path: 'report/project-tax-report', component: FinancialReportComponent },
  { path: 'report/input-maintenance', component: FinancialReportComponent },
  {
    path: 'maintenance/system-maintenance',
    component: SystemMaintenanceComponent,
  },
  { path: 'maintenance/data-maintenance', component: DataMaintenanceComponent },
  { path: 'search/summary', component: QueryComponent },
  { path: 'settings/basic', component: SettingsComponent },
  { path: 'settings/service-center', component: SettingsComponent },
  { path: 'settings/gui-configuration', component: SettingsComponent },
  { path: 'settings/invoice-group-print', component: SettingsComponent },
  { path: 'settings/invoice-template-maintenance', component: SettingsComponent },
  { path: 'settings/customer-maintenance', component: SettingsComponent },
  { path: 'settings/agent-maintenance', component: SettingsComponent },
  { path: 'settings/vendor-maintenance', component: SettingsComponent },
  { path: 'permissions', component: PermissionsComponent },
  { path: 'permissions/account-settings', component: AccountSettingsComponent },
  { path: 'permissions/group-settings', component: GroupSettingsComponent },
  { path: 'permissions/role-settings', component: RoleSettingsComponent },
  { path: 'permissions/feature-settings', component: FeatureSettingsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
