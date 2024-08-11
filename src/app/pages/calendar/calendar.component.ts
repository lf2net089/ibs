import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CalendarEvent, CalendarView, CalendarModule } from 'angular-calendar';
import { startOfDay, addDays, isSameMonth, isSameDay, subMonths, addMonths } from 'date-fns';
import { FormsModule } from '@angular/forms';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarFeatureModule } from './calendar-feature.module';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.less'],
  standalone: true,
  imports: [CommonModule, NgbDatepickerModule, FormsModule, CalendarFeatureModule],
})
export class CalendarComponent {
  view: CalendarView = CalendarView.Month;
  viewDate: Date = new Date();
  activeDayIsOpen: boolean = false;
  events: CalendarEvent[] = this.getDefaultEvents();

  getDefaultEvents(): CalendarEvent[] {
    return [
      {
        title: 'An all-day event',
        color: { primary: '#e3bc08', secondary: '#FDF1BA' },
        start: new Date(),
        allDay: true,
      },
      {
        title: 'A timed event',
        color: { primary: '#1e90ff', secondary: '#D1E8FF' },
        start: addDays(startOfDay(new Date()), 1),
        end: addDays(new Date(), 1),
      },
    ];
  }

  CalendarView = CalendarView;

  setView(view: CalendarView) {
    this.view = view;
  }

  handleEvent(event: any): void {
    const calendarEvent = event.event as CalendarEvent;
    console.log('Event clicked:', calendarEvent);
  }

  dayClicked(event: any): void {
    const { date, events } = event as { date: Date; events: CalendarEvent[] };
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }

  previousMonth(): void {
    this.viewDate = subMonths(this.viewDate, 1);
  }

  nextMonth(): void {
    this.viewDate = addMonths(this.viewDate, 1);
  }

  ngOnInit(): void {
    console.log('CalendarComponent initialized');
  }
}
