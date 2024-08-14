import { CalendarFeatureModule } from './calendar-feature.module';
import { Component, ChangeDetectorRef, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { CalendarEvent, CalendarView, CalendarMonthViewDay } from 'angular-calendar';
import { startOfDay, addDays, isSameMonth, isSameDay, subMonths, addMonths } from 'date-fns';
import { MenuItem, PrimeNGConfig } from 'primeng/api';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.less'],
  standalone: true,
  imports: [ CalendarFeatureModule],
  encapsulation: ViewEncapsulation.None
})
export class CalendarComponent {
  view: CalendarView = CalendarView.Month;
  viewDate: Date = new Date();
  activeDayIsOpen: boolean = false;
  events: CalendarEvent[] = this.getDefaultEvents();
  items: MenuItem[] = [];
  refresh: Subject<any> = new Subject();
  selectedDate: Date | null = null;
  hoveredDate: Date | null = null;

  constructor(private primengConfig: PrimeNGConfig, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Add Event',
        icon: 'pi pi-plus',
        command: () => this.addEvent(this.selectedDate),
      },
      {
        label: 'Delete Event',
        icon: 'pi pi-times',
        command: () => this.deleteEvent(this.selectedDate),
      },
    ];
    this.primengConfig.ripple = true;
    console.log('CalendarComponent initialized');
  }

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

  dayHovered(day: CalendarMonthViewDay): void {
    console.log('Day hovered:', day.date);
    this.hoveredDate = day.date;
  }

  dayClicked({ day }: { day: CalendarMonthViewDay }): void {
    const { date, events } = day;
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
      this.selectedDate = date;
      console.log('Day clicked:', this.selectedDate);
    }
  }

  previousMonth(): void {
    this.viewDate = subMonths(this.viewDate, 1);
  }

  nextMonth(): void {
    this.viewDate = addMonths(this.viewDate, 1);
  }

  addEvent(date: Date | null): void {
    if (date) {
      this.events.push({
        start: date,
        title: 'New event',
        color: { primary: '#ad2121', secondary: '#FAE3E3' },
      });
      console.log('Event added:', date);
      this.refresh.next(null);
      this.cdr.detectChanges();
    }
  }

  deleteEvent(date: Date | null): void {
    if (date) {
      const index = this.events.findIndex(event => isSameDay(event.start, date));
      if (index !== -1) {
        this.events.splice(index, 1);
        console.log('Event deleted:', date);
        this.refresh.next(null);
        this.cdr.detectChanges();
      }
    }
  }

}
