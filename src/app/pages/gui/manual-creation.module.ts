import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SidebarModule,
    AutoCompleteModule,
    CalendarModule,
    ButtonModule,
    FormsModule
  ],
  exports: [
  ]
})
export class ManualCreationModule { }
