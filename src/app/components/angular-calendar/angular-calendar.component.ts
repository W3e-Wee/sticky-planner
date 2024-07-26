import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CalendarEvent, CalendarModule, CalendarView } from 'angular-calendar';

@Component({
  selector: 'angular-calendar',
  standalone: true,
  imports: [CalendarModule, CommonModule],
  templateUrl: './angular-calendar.component.html',
  styleUrl: './angular-calendar.component.css',
})
export class AngularCalendarComponent {
  @Input() view: CalendarView = CalendarView.Month;
  @Input() viewDate: Date = new Date();
  @Input() events: CalendarEvent[] = [];
  
  CalendarView = CalendarView;
}
