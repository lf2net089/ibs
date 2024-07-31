import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BillingComponent } from './pages/billing/billing.component';
import { InvoiceComponent } from './pages/invoice/invoice.component';
import { CreditNoteComponent } from './pages/credit-note/credit-note.component';
import { ReceiptComponent } from './pages/receipt/receipt.component';
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

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'billing', component: BillingComponent },
  { path: 'invoice', component: InvoiceComponent },
  { path: 'credit-note', component: CreditNoteComponent },
  { path: 'receipt', component: ReceiptComponent },
  { path: 'financial-report', component: FinancialReportComponent },
  { path: 'maintenance/system-maintenance', component: SystemMaintenanceComponent },
  { path: 'maintenance/data-maintenance', component: DataMaintenanceComponent },
  { path: 'search', component: QueryComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'permissions', component: PermissionsComponent },
  { path: 'permissions/account', component: AccountSettingsComponent },
  { path: 'permissions/group', component: GroupSettingsComponent },
  { path: 'permissions/role', component: RoleSettingsComponent },
  { path: 'permissions/feature', component: FeatureSettingsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
