import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ContextMenuModule } from 'primeng/contextmenu';

@NgModule({
  imports: [
    CommonModule,
    NgbDatepickerModule,
    FormsModule,
    ContextMenuModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  exports: [
    CommonModule,
    NgbDatepickerModule,
    FormsModule,
    CalendarModule,
    ContextMenuModule
  ],
})
export class CalendarFeatureModule {}
