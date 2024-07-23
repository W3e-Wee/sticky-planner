import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CalendarEvent, CalendarModule, CalendarView } from 'angular-calendar';

@Component({
  selector: 'angular-calendar',
  standalone: true,
  imports: [CalendarModule, CommonModule],
  templateUrl: './angular-calendar.component.html',
  styleUrl: './angular-calendar.component.css',
})
export class AngularCalendarComponent {
  view: CalendarView = CalendarView.Month;
  viewDate: Date = new Date();
  events: CalendarEvent[] = [];
  CalendarView = CalendarView;
}
